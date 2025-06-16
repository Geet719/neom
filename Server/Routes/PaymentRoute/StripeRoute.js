const express=require('express');
const StripeController = require('../../Controllers/PaymentController/StripeController');
const stripeVerifyController = require('../../Controllers/PaymentController/stripeVerifyController');

const router=express.Router();
console.log("stripe route");
router.post("/check",StripeController);
router.post("/verify",stripeVerifyController);


module.exports=router;