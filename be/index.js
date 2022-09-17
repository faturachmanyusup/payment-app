require('dotenv').config();
const express = require('express');
const snap = require('./config/snap');
const { v4: UUIDv4 } = require('uuid');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/buy', (req, res) => {
  // get database untuk dapatkan harga

  let dummy = {
    transaction_details: {
      order_id: UUIDv4(),
      gross_amount: 10000
    },
    credit_card:{
      secure: true
    },
    customer_details: {
      first_name: "budi",
      last_name: "pratama",
      email: "budi.pra@example.com",
      phone: "08111222333"
    },
    callbacks: {
      finish: "http://localhost:3000/after-payment"
    }
  };

  snap.createTransaction(dummy)
    .then((transaction)=>{
      return res.status(201).json(transaction);
    })
    .catch((err) => {
      return res.status(err.httpStatusCode || 500).json(err.ApiResponse);
    })
})

// webhook / callback
app.post('/payment-notification', (req, res) => {
  if (req.body.fraud_status && req.body.fraud_status !== 'accept') {
    // handle transaksi yg berbahaya
  }

  if (req.body.transaction_status === 'settlement' || req.body.transaction_status === 'capture') {
    // update pembayaran di DB
  } else if (req.body.transaction_status === 'pending') {
    // update pembayaran db
  }


  console.log("\n==================");
  console.log(req.body);
  console.log("==================");

  res.status(200).send('OK');
});


app.listen(PORT, () => console.log('>> Server listening on PORT:', PORT));