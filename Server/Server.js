require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookie_parser=require('cookie-parser');

const googleAuthRoutes=require('./Routes/AuthenticationRoutes/googleAuthRoute.js');
const userVerifyRoutes=require('./Routes/userVerifyRoute/userRoute.js')
const signInRoutes=require('./Routes/SignInRoute/SignIn.js');
const loginInRoutes=require('./Routes/SignInRoute/loginIn.js');
const cardRoutes=require('./Routes/CardRoutes/cardRoutes.js');
const stripeRoute=require('./Routes/PaymentRoute/StripeRoute.js');

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());
app.use(cors({origin:process.env.FRONTEND_URL, credentials: true }));
app.use(cookie_parser());
app.use(passport.initialize());



app.use("/auth",googleAuthRoutes);
app.use('/verify',userVerifyRoutes);
app.use('/user',signInRoutes);
app.use('/user',loginInRoutes);
app.use('/card',cardRoutes);
app.use('/payment',stripeRoute);
app.use(express.static(path.join(__dirname,"../Client/dist")))


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/dist/index.html"));
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
