import React from 'react';

export default class Accordian extends React.Component {

  static defaultProps = {
    sections: []
  }

  renderMenuItems() {
    const menu = this.props.sections.map((item, index) => (
      <li key={index}>
        <button>{item.title}</button>
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