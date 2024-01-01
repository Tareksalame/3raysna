const express = require('express')
const app = express()
const bp = require('body-parser')
const db = require('mongoose')
const path = require('path');
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;
app.use(express.static('3raysnaapp/build'))
app.use(bp.urlencoded({extended: false}));
app.use(bp.json());
db.connect(dbURI);
const nodemailer = require('nodemailer');


const OrderSchema = db.Schema({
    name:String,
    phoneNumber: String,
    City: String,
    Email:String,
    Notes:String,
    TakeAwayOrShipping:String,
    Location:Object,
    Cart:Object,
    FinalPrice:Number,
    OrderNumber:Number
});

const OrderModel = db.model('Order',OrderSchema);


app.post('/BuyNow',async(req,res)=>
{
    let name = req.body.name;
    let phonenumber = req.body.phoneNumber;
    let city= req.body.city;
    let email = req.body.email;
    let notes = req.body.notes;
    let TakeAwayOrShipping = req.body.TakeAwayOrShipping;
    let location = req.body.location;
    let cart = req.body.cart;
    let FinalPrice = req.body.FinalPrice
    let OrderNumber = req.body.OrderNumber

    const temp = await OrderModel.insertMany({
        name:name,
        phoneNumber: phonenumber,
        City: city,
        Email:email,
        Notes:notes,
        TakeAwayOrShipping:TakeAwayOrShipping,
        Location:location,
        Cart:cart,
        FinalPrice:FinalPrice,
        OrderNumber:OrderNumber
    })
    if(temp !== null)
    {
        res.json('done')
    }
    else
    {
        res.json('error')
    }
})





app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '3raysnaapp/build', 'index.html'));
  });

  app.listen(process.env.PORT || 100, () => console.log('Server running on port', process.env.PORT || 100));
