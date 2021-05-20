const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    amountOwing: { type: Number, required: true },
    contactNumber: Number,
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;