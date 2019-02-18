const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

router.get('/', (req, res) => {
  db.getWidgets()
    .then(widgets => {
      res.send(widgets)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.saveWidget(req.body)
    .then(res.sendStatus(200))
})

router.delete('/', (req, res) => {
  db.deleteWidget()
  .then(res.sendStatus(202))
})

router.put('/', (req, res) => {
  db.updateWidget()
  .then(res.sendStatus(204))
})

module.exports = router
