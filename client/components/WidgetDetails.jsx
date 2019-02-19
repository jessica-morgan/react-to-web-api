import React from 'react'

export default function WidgetDetails (props) {
  const {widget, isVisible, hideDetails, deleteWidgetDetails} = props
  const classes = 'widget-details ' + (isVisible ? 'visible' : 'hidden')

  return (
    <div className={classes}>
      <h2>Details</h2>
      <p>Name: {widget.name}</p>
      <p>Price: {widget.price}</p>
      <p>Mfg: {widget.mfg}</p>
      <p>In stock: {widget.inStock}</p>
      <p>Rating: {widget.rating}</p>
      <button href='#' onClick={hideDetails}>Close</button>
      <button href='#' onClick={() => deleteWidgetDetails(widget)}>Delete</button>
    </div>
  )
}
