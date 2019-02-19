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
  db.deleteWidget(req.body)
  .then(res.redirect('/'))
})

router.put('/', (req, res) => {
  db.updateWidget(req.body)
  .then(res.redirect('/'))
})

module.exports = router
