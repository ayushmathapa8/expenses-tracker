import express from "express";
import { getOneUser, insertUser } from "../models/userModel/UserModel.js";
const router = express.Router();


router.post("/login", async (req,res,next) =>{
  try {

    const{email,password} =req.body;

    const user= await getOneUser({email});



    if(user?.password === password){
      user.password =undefined;
      return res.json({
      status:"success",
      message:"Login successfully",
      user,
        
      });
    }
      res.json({
        status:"error",
        message:"Invalid Login information",
      
      });

  } catch (error) {
    next(error);
    
  }
})

router.post("/", async(req, res, next) => {
  try {
    console.log(req.body);


    const result =await insertUser(req.body);
    res.json({
      status: "success",
      message: "your account has been created successfiully,please go to login page and login with your email"+ result.email,
    });
  } catch (error) {
    if(error.message.includes("E11000 duplicate key error collection")){
      error.status =200;
      error.message= "email already exist for the"
    }
    next(error);
  }
});

export default router;
