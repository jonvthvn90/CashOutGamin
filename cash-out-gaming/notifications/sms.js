import twilio from 'twilio';

const accountSid = 'your-account-sid';
const authToken = 'your-auth-token';
const client = new twilio(accountSid, authToken);

const sendSms = (to, body) => {
  client.messages
    .create({
      from: 'your-twilio-number',
      to,
      body,
    })
    .then((message) => {
      console.log(`SMS sent: ${message.sid}`);
    })
    .done();
};

export default sendSms;