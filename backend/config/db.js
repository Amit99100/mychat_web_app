//mongoose is used to connect to our data base and make quereis to database . 
const mongoose = require("mongoose");
const colors = require("colors");

// connection to mongodb 
const connectDB = async () => {
  const MONGO_URI = "mongodb+srv://akm1632456:Amit456@cluster0.4zwu9ey.mongodb.net/?retryWrites=true&w=majority"
  try {
    const conn = await mongoose.connect(MONGO_URI, {

    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

