const midtransClient = require('midtrans-client');

let snap = new midtransClient.Snap({
  isProduction : process.env.NODE_ENV === 'production',
  serverKey : process.env.SERVER_KEY
});

module.exports = snap;