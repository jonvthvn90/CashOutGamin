const net = require('net');
const firewall = require('node-firewall');

const rules = [
  {
    protocol: 'tcp',
    port: 80,
    direction: 'inbound',
    action: 'allow',
  },
  {
    protocol: 'tcp',
    port: 443,
    direction: 'inbound',
    action: 'allow',
  },
  {
    protocol: 'icmp',
    direction: 'inbound',
    action: 'allow',
  },
];

firewall.createRules(rules, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Firewall rules created successfully');
  }
});

const server = net.createServer((socket) => {
  console.log('Connection established');

  socket.on('data', (data) => {
    console.log(`Received data: ${data}`);
  });

  socket.on('close', () => {
    console.log('Connection closed');
  });
});

server.listen(80, () => {
  console.log('Server listening on port 80');
});