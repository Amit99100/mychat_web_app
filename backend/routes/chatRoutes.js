const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
//so Here protect is making sure that if user is not logged in he cannot do any thing . 
//below mentioned . 
router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);

// create a group , post request 
router.route("/group").post(protect, createGroupChat);

//We are updating so put requeest 
router.route("/rename").put(protect, renameGroup);

//remove from group a person  . 
router.route("/groupremove").put(protect, removeFromGroup);

//add someone to group . 
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;
