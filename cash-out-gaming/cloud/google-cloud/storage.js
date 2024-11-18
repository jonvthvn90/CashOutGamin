const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  credentials: JSON.parse(process.env.GOOGLE_CLOUD_CREDENTIALS),
});

const uploadFile = async (file) => {
  const bucket = storage.bucket(process.env.GOOGLE_CLOUD_STORAGE_BUCKET);
  const fileRef = bucket.file(file.originalname);

  try {
    await fileRef.save(file.buffer);
    return fileRef.publicUrl();
  } catch (error) {
    throw error;
  }
};

module.exports = uploadFile;