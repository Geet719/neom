const express=require('express');
const loginInController=require('../../Controllers/SignInController/loginController');

const router=express.Router();

router.post("/loginIn",loginInController);


module.exports=router;