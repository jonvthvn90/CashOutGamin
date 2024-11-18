const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const createInstance = async () => {
  const params = {
    ImageId: process.env.AWS_EC2_IMAGE_ID,
    InstanceType: process.env.AWS_EC2_INSTANCE_TYPE,
    MinCount: 1,
    MaxCount: 1,
  };

  try {
    const data = await ec2.runInstances(params).promise();
    return data.Instances[0].InstanceId;
  } catch (error) {
    throw error;
  }
};

module.exports = createInstance;