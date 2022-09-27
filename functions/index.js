const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")("sk_test_51LhJ6CC4y0LjrhI2fKbX4Q0jJIPTr9SKvuYoGlJfulR33jSo5upZuXKgQ356x653CH0wacIZlJr2HZnUjJfMiwn000m1NyAQrj");

// API

// App config
const app = express();
// Middlewares
app.use(cors({origin: '*' ,credentials: false , methods: "GET,PUT,POST,DELETE"}));
app.use(express.json());
// API routes
app.get('/', (req, res) => res.status(200).send("hello word"));
app.post('/payments/create', async function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        const total = req.query.total;
       // console.log(total);
        const paymentIntent = await stripe.paymentIntents.create(
            {
                amount: total,
                currency: "usd",
            }
        );
        res.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
    })

// Listen command
exports.api = functions.https.onRequest(app);
