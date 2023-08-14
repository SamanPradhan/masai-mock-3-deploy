const express = require("express");
const dashboardRouter = express.Router();
const { bookingModel } = require("../models/booking.model");

//get bookings by a user route
dashboardRouter.get("/", async (req, res) => {
  try {
    const userId = req.params.userId;
    const findbookingbyuser = await bookingModel
      .find()
      .populate("flight")
      .populate("user");
    return res.status(200).send({ msg: findbookingbyuser });
  } catch (error) {
    res.status(400).json("Error: ", error);
  }
});

//updating bookings route
dashboardRouter.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    let { userId, flightId } = req.body;

    let findbooking = await bookingModel.find({ _id: id });
    if (userId) {
      findbooking[0].user = userId;
    }
    if (flightId) {
      findbooking[0].flight = flightId;
    }
    console.log(findbooking);
    let n = findbooking[0];
    console.log(n);
    await n.save();
    return res.status(204).send({ msg: "booking Details is updated" });
  } catch (error) {
    res.status(400).json("Error: ", error);
  }
});

//deleting bookings route
dashboardRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    if (id) {
      await bookingModel.findByIdAndDelete(id);
      return res.status(202).send({ msg: "booking Details is deleted" });
    }
  } catch (error) {
    res.status(400).json("Error: ", error);
  }
});

module.exports = { dashboardRouter };
