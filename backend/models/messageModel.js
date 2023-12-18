const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    //name of the sender 
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    //content will be string
    content: { type: String, trim: true },

    //chat id and ref chat . 
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  //time stamps . 
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
