import React from 'react';

export default class Bomb extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => { 
      this.setState({
        count: this.state.count + 1
      })
     }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    console.log(this.interval)
    if(this.state.count >= 8) {
      clearInterval(this.interval)
      return <p>BOOM!</p>
    } else if(this.state.count % 2 === 0) {
      return <p>tick</p>
    } else {
      return <p>tock</p>
    }
  }
}