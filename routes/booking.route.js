const express = require("express");
const bookingRouter = express.Router();
const { bookingModel } = require("../models/booking.model");

//create new booking route
bookingRouter.post("/", async (req, res) => {
  try {
    let { userId, flightId } = req.body;
    let newbooking = new bookingModel({ user: userId, flight: flightId });
    console.log(newbooking);
    await newbooking.save();
    res.status(201).json("New booking  Successfull");
  } catch (error) {
    res.status(400).json("Error: ", error);
  }
});

module.exports = { bookingRouter };
