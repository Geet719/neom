const express=require('express');
const signInController = require('../../Controllers/SignInController/SignInController');
const upload=require('../../Middleware/Multer');


const router=express.Router();

router.post("/signIn",upload.single("profilePic"),signInController);


module.exports=router;