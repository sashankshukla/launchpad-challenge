const express = require('express')
const app = express()
const stripe = require('stripe')(process.env.STRIPE_API_KEY)


//order pizza
app.get('/orderFood', (req,res) =>{
     
});

//make payment for online order
app.post('/onlinePayment', async (req,res) =>{
    // Stripe API goes here
});

app.pos


//view reciept for previous order
//assume MongoDB exists for all orders and uniquely identifying ID
app.get('/viewReciept', (req,res) =>{
     
});

//update tracking status
app.post('/updateStatus', (req,res) =>{
     
}); 

app.listen(3000, () => {console.log("App is listening on port 3000")});