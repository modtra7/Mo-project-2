const mongoose = require('mongoose')

const killerSchema = new mongoose.Schema({
    name: String,
    role: String,
    power: String,
    perks: {
        perk_1: String,
        perk_2: String,
        perk_3: String
    },
    lore: String
})

const Killer = mongoose.model('Killer', killerSchema)

module.exports = Killer