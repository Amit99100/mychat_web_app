const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//name , email , password , pic and it is admin or not . 

const userSchema = mongoose.Schema(
  {

    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    pic: {
      type: "String",
      required: true,
      default:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestaps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Before Saving the password encrypt the password . 
userSchema.pre("save", async function (next) {

  //if not modiffied 
  if (!this.isModified) {
    next();
  }

  //higer the number more strong salt is generatod 
  const salt = await bcrypt.genSalt(10);
  //hash the password with the salt . 
  this.password = await bcrypt.hash(this.password, salt);
});


// creater User from Model . 
const User = mongoose.model("User", userSchema);

module.exports = User;
