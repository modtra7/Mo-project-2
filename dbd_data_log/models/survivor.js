const mongoose = require('mongoose')

const survivorSchema = new mongoose.Schema({
    name: String,
    role: String,
    img: String,
    perks: {
        perk_1: String,
        perk_2: String,
        perk_3: String
    },
    lore: String
})

const Survivor = mongoose.model('Survivor', survivorSchema)

module.exports = Survivor