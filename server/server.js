const express = require('express')
const Card = require('./models/Card')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/flashcards', {
  useNewUrlParser: true,
})

//Card.find().forEach(card => {delete card[id]});

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`Express ready on ${PORT}`))

app.get('/cards', (req, res) => {
  Card.find().then(cards => res.json(cards))
})

app.delete('/cards/:id', (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then(card => res.json(card))
    .catch(err => res.json(err))
})

app.get('/cards/:id', (req, res) => {
  Card.findById(req.params.id)
    .then(card => res.json(card))
    .catch(err => res.json(err))
})

app.post('/cards', (req, res) => {
  Card.create(req.body)
    .then(card => res.json(card))
    .catch(err => res.json(err))
})

app.patch('/cards/:id', (req, res) => {
  Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(card => res.json(card))
    .catch(err => res.json(err))
})
