import React from 'react'

import AddWidget from './AddWidget'
import WidgetList from './WidgetList'
import WidgetDetails from './WidgetDetails'
import ErrorMessage from './ErrorMessage'
import UpdateWidget from './UpdateWidget'

import {getWidgets, deleteWidget, updateWidget} from '../api'


export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      widgets: [],
      activeWidget: null,
      detailsVisible: false,
      addWidgetVisible: false,
      updateWidgetFormVisible: false
    }

    this.refreshList = this.refreshList.bind(this)
    this.showDetails = this.showDetails.bind(this)
    this.hideDetails = this.hideDetails.bind(this)
    this.renderWidgets = this.renderWidgets.bind(this)
    this.showAddWidget = this.showAddWidget.bind(this)
    this.deleteWidgetDetails = this.deleteWidgetDetails.bind(this)
    this.showUpdateForm = this.showUpdateForm.bind(this)
  }

  componentDidMount () {
    this.refreshList()
  }

  renderWidgets (err, widgets) {
    this.setState({
      error: err,
      widgets: widgets || []
    })
  }

  refreshList (err) {
    this.setState({
      error: err,
      addWidgetVisible: false
    })
    getWidgets(this.renderWidgets)
  }

  showAddWidget () {
    this.setState({
      addWidgetVisible: true
    })
  }

  showDetails (widget) {
    this.setState({
      activeWidget: widget,
      detailsVisible: true
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

  deleteWidgetDetails (widget) {
    this.setState({
      activeWidget: null,
      detailsVisible: false
    })
    deleteWidget(widget, this.refreshList)
  }

  updateWidgetDetails (widget) {
    this.setState({
      activeWidget: widget,
      detailsVisible: true
    })
    updateWidget(widget, this.refreshList)
  }

  showUpdateForm (widget) {
    this.setState({
      activeWidget: widget,
      updateWidgetFormVisible: true,
      detailsVisible: false
  })
}

hideUpdateForm () {
  this.setState({
    updateWidgetFormVisible: false
  })
}

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />

        <h1>Widgets FTW!</h1>

        <WidgetList
          showDetails={this.showDetails}
          widgets={this.state.widgets} />

        <p>
          <a id='show-widget-link' href='#'
            onClick={this.showAddWidget}>Add widget</a>
        </p>
        
      <a href='#' onClick={this.refreshList}>Refresh</a>

        {this.state.addWidgetVisible && <AddWidget
          finishAdd={this.refreshList} />}

        {this.state.detailsVisible && <WidgetDetails
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails}
          widget={this.state.activeWidget}
          deleteWidgetDetails={this.deleteWidgetDetails}
          showUpdateForm={this.showUpdateForm}
           />}

           {this.state.updateWidgetFormVisible && <UpdateWidget
            widget={this.state.activeWidget}
            showDetails={this.showDetails}
            hideDetails={this.hideDetails}
            hideUpdateForm={this.hideUpdateForm}
            updateWidgetDetails={this.updateWidgetDetails}
            finishAdd={this.refreshList}
            />}
      </div>
    )
  }
}
