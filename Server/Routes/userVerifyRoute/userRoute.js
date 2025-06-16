const express=require('express');
const router=express.Router();
const verifyUserController=require('../../Controllers/userController/userVerify');
console.log("in user verify routefile");
router.get("/user",verifyUserController);


module.exports = router;
