import React from 'react';

export default class HelloWorld extends React.Component {
  state = {
    who: 'world'
  };

  handleClick = (e) => {
    this.setState({
      who: `${e.target.id}!`
    })
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button id='world' onClick={this.handleClick}>World</button>
        <button id='friend' onClick={this.handleClick}>Friend</button>
        <button id='react' onClick={this.handleClick}>React</button>
      </div>
    )
  }
}