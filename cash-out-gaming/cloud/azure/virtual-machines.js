const { ComputeManagementClient } = require('@azure/arm-compute');

const computeClient = new ComputeManagementClient(
  '<subscription_id>',
  '<resource_group_name>',
  '<vm_name>'
);

async function createVM() {
  const vm = {
    location: 'West US',
    hardwareProfile: {
      vmSize: 'Standard_DS2_v2',
    },
    osProfile: {
      adminUsername: 'admin',
      adminPassword: 'password',
      computerName: 'my-vm',
    },
    storageProfile: {
      imageReference: {
        publisher: 'Canonical',
        offer: 'UbuntuServer',
        sku: '16.04-LTS',
        version: 'latest',
      },
      osDisk: {
        createOption: 'FromImage',
        managedDisk: {
          storageAccountType: 'Standard_LRS',
        },
      },
    },
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/<subscription_id>/resourceGroups/<resource_group_name>/providers/Microsoft.Network/networkInterfaces/my-nic',
        },
      ],
    },
  };

  await computeClient.virtualMachines.beginCreateOrUpdate('<resource_group_name>', '<vm_name>', vm);
}

async function startVM() {
  await computeClient.virtualMachines.beginStart('<resource_group_name>', '<vm_name>');
}

async function stopVM() {
  await computeClient.virtualMachines.beginStop('<resource_group_name>', '<vm_name>');
}

module.exports = { createVM, startVM, stopVM };