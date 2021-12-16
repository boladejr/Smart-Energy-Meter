const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deetSchema = new Schema({
    point: {
        type: String,
        required: true
    },
    voltage: {
        type: Number,
        required: true
    },
    current: {
        type: Number,
        required: true
    },
    power: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        default: Date.now
    },
})
module.exports = mongoose.model("Deet", deetSchema, "deets")