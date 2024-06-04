import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name:String,
    email:String,
    age:Number
});

const UserModel = mongoose.model('users',UserSchema);

export default UserModel;