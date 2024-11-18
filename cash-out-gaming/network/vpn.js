const vpn = require('node-vpn');

const vpnConfig = {
  host: 'vpn.example.com',
  port: 1194,
  protocol: 'udp',
  username: 'username',
  password: 'password',
};

vpn.connect(vpnConfig, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('VPN connection established successfully');
  }
});

vpn.on('connected', () => {
  console.log('VPN connected');
});

vpn.on('disconnected', () => {
  console.log('VPN disconnected');
});

vpn.on('error', (err) => {
  console.error(err);
});