const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const killerSeed = require('./models/killers.js')
const survivorSeed = require('./models/survivors.js')

const Killer = require('./models/killer.js')
const Survivor = require('./models/survivor.js')

const app = express()

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/dbd').then(() => {
    console.log('-CONNECTED-');
})
app.listen(3000, () => {
    console.log('-LISTENING-');
})

//////////////////////////////////////

// ======= SEED & DROP ======= //
// app.get('/seed', (req, res) => {
//     Killer.create(killerSeed).then((data) => {
//         res.send(data)
//     })
// })

// app.get('/seed', (req, res) => {
//     Survivor.create(survivorSeed).then((data) => {
//         res.send(data)
//     })
// })

// Killer.collections.drop()
// Survivor.collections.drop()

//////////////////////////////////////
//////////////////////////////////////

// ======= REST ROUTES ======= //
// === INDEX === //
app.get('/dbd', (req, res) => {
    res.render('index.ejs', {
        killers: killerSeed,
        survivors: survivorSeed
    })
})
// app.get('/dbd/', (req, res) => {
//     Killer.find({}).then(() => {
//         res.render()
//     })
// })
// app.get('/dbd/', (req, res) => {
//     Survivor.find({}).then(() => {
//         res.render()
//     })
// })
// === NEW === //
app.get('/dbd/new', (req, res) => {
    res.render('new.ejs')
})
// === SHOW === //
app.get('/dbd/killer/:id', (req, res) => {
    Killer.findById(req.params.id).then(() => {
        res.render('showKiller.ejs')
    })
})
app.get('/dbd/survivor/:id', (req, res) => {
    Survivor.findById(req.params.id).then(() => {
        res.render('showSurvivor.ejs')
    })
})
// ======= ACTION ROUTES ======= //