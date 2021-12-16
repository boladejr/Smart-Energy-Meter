const express = require('express');
const router = express.Router()

const Deet = require('../models/Deet');

router.get('/', (req, res) => {
    Deet.find()
        .then(deets => res.json(deets))
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const { voltage, current, point, power } = req.body;
    const newDeet = new Deet({
       point: point,
       voltage: voltage,
       current: current,
       power: power
    })
    newDeet.save()
        .then(() => res.json({
            message: "Deet logged successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error logging deet"
        }))
})
module.exports = router 