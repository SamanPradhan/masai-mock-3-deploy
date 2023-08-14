const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  flight: { type: mongoose.Schema.Types.ObjectId, ref: "Flight" },
});

const bookingModel = mongoose.model("Booking", bookingSchema);
module.exports = { bookingModel };

// {
//     _id: ObjectId,
//     user : { type: ObjectId, ref: 'User' },
//     flight : { type: ObjectId, ref: 'Flight' }
// }
