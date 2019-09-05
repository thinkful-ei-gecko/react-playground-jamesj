import React from 'react';

export default class Accordian extends React.Component {

  static defaultProps = {
    sections: []
  }

  state = {
    currentMenuIndex: null
  }

  handleButtonClick = (index) => {
    this.setState({
      currentMenuIndex: index
    })
  }

  renderMenuIndexContent = () => {
    return (
      <p>
        {this.state.currentMenuIndex !== null && this.props.sections[this.state.currentMenuIndex].content}
      </p>
    )
  }

  renderMenuItems() {
    const menu = this.props.sections.map((item, index) => (
      <li key={index}>
        <button key={index} onClick={() => this.handleButtonClick(index)}>{item.title}</button>
        {this.state.currentMenuIndex === index && this.renderMenuIndexContent()}
      </li>
    ))
    return menu
  }

  render() {
    return (
      <ul>
        {this.renderMenuItems()}
      </ul>
    )
  }
}