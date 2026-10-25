import userModel from '../models/models.user.js';
import jwt from 'jsonwebtoken';
async function register(req, res){
    const isExisting = await userModel.findOne({email: req.body.email});

    if(isExisting){
        return res.json({message: "User already exists"});
    }
    const user = await userModel.create(req.body);

    console.log(res);

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    console.log(req.cookies);
    res.cookie("token", token);
    res.status(200).json({message: "registerd successfully", user});
}

export {register};