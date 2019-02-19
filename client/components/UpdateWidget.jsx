import React from 'react'

import {updateWidget} from '../api'

export default class UpdateWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        //state comes from add
      id: props.widget.id,
      name: props.widget.name,
      price: props.widget.price,
      mfg: props.widget.mfg,
      inStock: props.widget.inStock,
      rating: props.widget.rating
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateDetails (e) {
      //update widget comes from api
      //finishAdd, showDetails comes from props in App
    updateWidget(this.state, this.props.finishAdd(), this.props.hideDetails())
  }

  render () {
    return (
      <div className='add-widget'>
        <form>
          <p><input placeholder='Name' name='name'
            onChange={this.handleChange}
            value={this.state.name}
          /></p>
          <p><input placeholder='Price' name='price'
            onChange={this.handleChange}
            value={this.state.price}
          /></p>
          <p><input placeholder='Manufacturer' name='mfg'
            onChange={this.handleChange}
            value={this.state.mfg}
          /></p>
          <p><input placeholder='In stock' name='inStock'
            onChange={this.handleChange}
            value={this.state.inStock}
          /></p>
          <p><input placeholder='Rating' name='rating'
            onChange={this.handleChange}
            value={this.state.rating}
          /></p>
          
          <button type='button' onClick={this.updateDetails}>Update widget</button>
          {' '}
          <a href='#' onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  }
}
