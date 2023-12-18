const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

//we can chain multiple things . 
router.route("/").get(protect, allUsers);

//we can use both way .route('/').post() or router.post() ( but here i cannot chain )
//for registeration for users. 
router.route("/").post(registerUser);
//for authorization of users 
router.post("/login", authUser);

module.exports = router;
