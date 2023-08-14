const express = require("express");

const dotenv = require("dotenv");
const { apiRouter } = require("./routes/route");
const { flightRouter } = require("./routes/flights.route");
const { bookingRouter } = require("./routes/booking.route");
const { dashboardRouter } = require("./routes/dashboard.route");
dotenv.config();
const { connnection } = require("./config/db");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

// var options = {
//   swaggerDefinition: {
//     openapi: "3.1.0",
//     info: {
//       title: "backend flightbook",
//       description: "API docs",
//     },
//     servers: [{ url: "localhost:5000" }],
//   },
//   apis: ["routes/*.js"],
// };
// let swaggerspe = swaggerJsdoc(options);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerspe));
//routes
app.get("/api", (req, res) => {
  res.send("Home");
});
app.use("/api", apiRouter);
app.use("/api/flights", flightRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/dashboard", dashboardRouter);
//connnection
app.listen(PORT, async () => {
  try {
    await connnection;
    console.log("Connected to DATABASE");
  } catch (error) {
    console.log("Can not connect to DATABASE");
  }
  console.log("Server listening at ", PORT);
});
