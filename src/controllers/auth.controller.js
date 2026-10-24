import userModel from '../models/models.user.js';
import jwt from 'jsonwebtoken';
async function register(req, res){
    const user = await userModel.create(req.body);
    console.log(res);
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);
    res.status(200).json({message: "registerd successfully", token});
}

export {register};