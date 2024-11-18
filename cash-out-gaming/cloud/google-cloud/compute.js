const { Compute } = require('@google-cloud/compute');

const compute = new Compute({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  credentials: JSON.parse(process.env.GOOGLE_CLOUD_CREDENTIALS),
});

const createInstance = async () => {
  const zone = compute.zone(process.env.GOOGLE_CLOUD_COMPUTE_ZONE);
  const vm = zone.vm(process.env.GOOGLE_CLOUD_COMPUTE_VM_NAME);

  try {
    await vm.create({
      machineType: process.env.GOOGLE_CLOUD_COMPUTE_MACHINE_TYPE,
      disks: [
        {
          initializeParams: {
            diskSizeGb: process.env.GOOGLE_CLOUD_COMPUTE_DISK_SIZE_GB,
          },
        },
      ],
   