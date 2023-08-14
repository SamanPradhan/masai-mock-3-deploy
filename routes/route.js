const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const apiRouter = express.Router();
const { userModel } = require("../models/user.model");

//register route
// /**
// http://localhost:5000/api/register
// post:
//       summary: Creates a user.
//       requestBody:
//         required: true
//         content:
//           application/json:
//             schema:
//               type: object
//               properties:
//                 username:
//                   type: string
//       responses:
//         '201':
//           description: Register Successfull"
//           "400":
//           description: Error"
//           */
apiRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 8, async (err, hash) => {
      if (hash) {
        console.log(hash, userModel);
        const newUser = new userModel({
          name,
          email,
          password: hash,
        });
        await newUser.save();
        res.status(201).json("Register Successfull");
      }
    });
  } catch (error) {
    res.status(400).json("Error: ", error);
  }
});

//login route
apiRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await userModel.findOne({ email });
    if (!findUser) {
      return res.status(404).json("Email is not registered");
    }
    bcrypt.compare(password, findUser.password, (err, result) => {
      if (result) {
        const token = jwt.sign(
          { userID: findUser._id },
          process.env.secretJWT,
          { expiresIn: "1h" }
        );
        return res.status(201).send({ msg: "Login Successfull", token });
      } else {
        return res.status(400).json("Password Wrong");
      }
    });
  } catch (error) {
    res.status(400).json("Error: ", error);
  }
});

module.exports = { apiRouter };
