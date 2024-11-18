const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadFile = async (file) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: file.originalname,
    Body: file.buffer,
  };

  try {
    const data = await s3.upload(params).promise();
    return data.Location;
  } catch (error) {
    throw error;
  }
};

module.exports = uploadFile;