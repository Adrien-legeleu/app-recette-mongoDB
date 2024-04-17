import mongoose from "mongoose"

export interface IUser {
  _id:string;
  username:string;
  password:string;
  email:string;
  createAT:Date;
  updateAT:Date;
}

const UserSchema= new mongoose.Schema<IUser>(
  {
    username:{
      type:String,
      required:true,
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true
    }
  },
  {
    timestamps:true
  }
)

export const UserModel=mongoose.model("users", UserSchema)