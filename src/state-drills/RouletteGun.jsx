import React from 'react';

export default class RouletteGun extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  handleTriggerPull = () => {
    this.setState({
      spinningTheChamber: true
    })
    this.timeout = setTimeout(() => {
      this.setState({
        chamber: Math.ceil(Math.random() * 8),
        spinningTheChamber: false
      })
    }, 2000)
  }

  displayRouletteResults = () => {
    console.log(this.props)
    if(this.state.spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger...'
    } else if(this.state.chamber === this.props.bulletInChamber) {
      return 'BANG!!!'
    } else if(this.state.chamber === null) {
      return ''
    } else {
      return 'you\'re safe'
    }
  }

  render() {
    return (
      <div>
        <p>{this.displayRouletteResults()}</p>
        <button onClick={this.handleTriggerPull}>Pull the trigger!</button>
      </div>
    )
  }
}