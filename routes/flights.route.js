const express = require("express");
const flightRouter = express.Router();
const { flightModel } = require("../models/flight.model");

//create new flight route
flightRouter.post("/", async (req, res) => {
  try {
    let newFlight = new flightModel(req.body);
    await newFlight.save();
    res.status(201).json("New Flight Creation Successfull");
  } catch (error) {
    res.status(400).json("Error: ", error);
  }
});

//get all flights route
flightRouter.get("/", async (req, res) => {
  try {
    const findflight = await flightModel.find();
    return res.status(200).send({ msg: findflight });
  } catch (error) {
    res.status(400).json("Error: ", error);
  }
});

//get flights by id route
flightRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    if (id) {
      const findflight = await flightModel.findOne({ _id: id });
      return res.status(200).send({ msg: findflight });
    } else {
      return res.status(400).send({ msg: "Invalid id" });
    }
  } catch (error) {
    res.status(400).json("Error: ", error);
  }
});
//updating flights route
flightRouter.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    await flightModel.findByIdAndUpdate(id, req.body);
    return res.status(204).send({ msg: "Flight Details is updated" });
  } catch (error) {
    res.status(400).json("Error: ", error);
  }
});

//deleting flights route
flightRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    if (id) {
      await flightModel.findByIdAndDelete(id);
      return res.status(202).send({ msg: "Flight Details is deleted" });
    }
  } catch (error) {
    res.status(400).json("Error: ", error);
  }
});
module.exports = { flightRouter };
