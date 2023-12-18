//mongoose is used to connect to our data base and make quereis to database . 
const mongoose = require("mongoose");

// IMPORTANT Things i have to add to schema 
// name, isgroup or not , users , latest message , isgroupadmin ,  when it is created for 
// tracking purpose . 

const chatModel = mongoose.Schema(
  {
    // trim will make sure there is no traling spaces after name . 
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    // users will be array fo chat .id will contain here . //ref is referring to particcular 
    // Users . 
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    // latest message should display in front . 
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },

    // again refrence to that user .  is User . 
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },

  // every time i add data so it add time . 
  { timestamps: true }
);

// create model from chat schema 
const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
