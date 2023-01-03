const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    require: true,
  },
  user_email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  mobile_Num: {
    type:String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  profile_pic:{
    type:String
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    default: "User",
  },
});
userSchema.set("timestamps", true);
module.exports = mongoose.model("users", userSchema);
