const { BlobServiceClient } = require('@azure/storage-blob');

const blobServiceClient = new BlobServiceClient(
  'https://<account_name>.blob.core.windows.net',
  '<account_key>'
);

const containerName = 'my-container';
const blobName = 'my-blob';

async function uploadBlob() {
  const blockBlobClient = blobServiceClient.getBlockBlobClient(containerName, blobName);
  const uploadOptions = {
    blobHTTPHeaders: {
      blobContentType: 'text/plain',
    },
  };

  const fileBuffer = Buffer.from('Hello, World!', 'utf8');
  await blockBlobClient.uploadData(fileBuffer, fileBuffer.length, uploadOptions);
}

async function downloadBlob() {
  const blockBlobClient = blobServiceClient.getBlockBlobClient(containerName, blobName);
  const downloadResponse = await blockBlobClient.download();
  const downloadedContent = await streamToString(downloadResponse.readableStreamBody);
  console.log(`Downloaded content: ${downloadedContent}`);
}

async function streamToString(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on('data', (data) => {
      chunks.push(data.toString());
    });
    readableStream.on('end', () => {
      resolve(chunks.join(''));
    });
    readableStream.on('error', reject);
  });
}

module.exports = { uploadBlob, downloadBlob };