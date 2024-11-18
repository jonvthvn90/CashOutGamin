import webpush from 'web-push';

const vapidKeys = {
  publicKey: 'your-public-key',
  privateKey: 'your-private-key',
};

const sendPush = (subscription, payload) => {
  webpush.sendNotification(subscription, payload)
    .then((result) => {
      console.log(`Push sent: ${result}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default sendPush;