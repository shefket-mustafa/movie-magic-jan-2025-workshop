import User from "../models/User.js";
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken';

const SECRET = 'zl$1e$Vrq71iUu3ja8bIHtuO6T7eILmIMKhFs.WKsP3m9DquSrgyyo2ywNO'
export default {
    register(userData){
        return User.create(userData);
    },
    async login(email,password){
        //check if user exists
        const user = await User.findOne({ email });
        if(!user){
            throw new Error('Invalid email');
        };
        //check if password is correct
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid){
            throw new Error('Invalid username or password!');
        }

        //Generate token
        const payload = {
            id: user.id,
            email: user.email
        };
        //TODO use async option later
        const token = jwt.sign(payload, SECRET, {expiresIn: '2h'});

        //return token
        return token;
    }
};