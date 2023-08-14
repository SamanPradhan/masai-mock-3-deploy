const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
let DATABASE = process.env.DATABASE;
const connnection = mongoose.connect(DATABASE);
module.exports = { connnection };
