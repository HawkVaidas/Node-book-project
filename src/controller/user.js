
import UserModel from "../model/user.js";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const CREATE_USER = async function(req, res) {
    try{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = {
       name: req.body. name,
       email: req.body.email,
       id: uuidv4(),
       userId: req.body.userId,
       password: hash,
    };
    const response = await new UserModel(user);

    await response.save();

    return res.status(201).json({
        message: "User was created", response: response});
} catch (err) {
    console.log(err);
    return res.status(500).json({message:"error"});
}
};

const LOGIN = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email});
        if (!user) {
            return res.status(401).json({message: "Bad authentification"});
         }
         const isPasswordMach = bcrypt.compareSync(req.body.password, user.password); 
         if(!isPasswordMach) {
            return res.status(401).json({message: "Bad auth"});
         }
         const token = jwt.sign({
            email: user.email,
            userId: user.id,
         },process.env.JWT_SECRET,
         {expiresIn: "12H"});
        
        //  return res.status(200).json({token: token, message: "Login was ok!"});
        return res.status(200).json({token: token, userId: user.id});

    } catch (err) {
        console.log(err);
        return res.status(500).json({message: "Error in application"});
    }
};

const GET_USER_BY_ID = async (req, res) => {
    try {
        const response = await new UserModel.findOne({id:req.params.id});
        await response.save();
        return res.status(200).json({user: response});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: "error in application"});
    }

};
const DELETE_USER_BY_ID = async (req, res) => {
    try {
        const response = await UserModel.findOneAndDelete({id: req.params.id});

       await response.save();
        return res.status(200).json({message: "User was deleted", user: response});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: "error in application"});
    }
};
const VALIDATE_LOGIN = async (req, res) => {
    try {
        return res.status(200).json({message: "User OK"});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: "error in application"});
    }
};


export {CREATE_USER, LOGIN, GET_USER_BY_ID, DELETE_USER_BY_ID,VALIDATE_LOGIN}