import { Schema, model } from "mongoose";
import mongoose from "mongoose"


const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
},{ timestamps: true })

export default mongoose.models.User || model('User', userSchema)