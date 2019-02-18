import request from 'superagent'

const widgetUrl = 'http://localhost:3000/api/v1/widgets/'

export function getWidgets (callback) {
  request
    .get(widgetUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function appendWidget (widget, callback) {
  request
    .post(widgetUrl)
    .send(widget)
    .end((err, res) => {
      callback(err)
    })
}

export function deleteWidget (widget, callback) {
  request
  .delete(widgetUrl)
  .send(widget)
  .end((err, res) => {
    callback(err)
  })
}

export function updateWidget (widget, callback) {
  request
  .put(widgetUrl)
  .send(widget)
  .end((err, res) => {
    callback(err)
  })
}