// // Information exchange: JWTs are a good way of securely transmitting 
// information between parties because they can be signed, which means you 
// can be certain that the senders are who they say they are. Additionally, 
// the structure of a JWT allows 
// you to verify that the content hasn't been tampered with.

const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const JWT_SECRET = "AmitMaurya";
  return jwt.sign({ id }, JWT_SECRET, {
    // in how much time token expires , here i made 30 days . 
    expiresIn: "15d",
  });
};

module.exports = generateToken;
