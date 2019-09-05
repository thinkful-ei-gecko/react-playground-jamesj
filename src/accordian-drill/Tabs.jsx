import React from 'react'

export default class Tabs extends React.Component {
  static defaultProps = { tabs: [] }
  render() {
    const buttons = this.props.tabs.map((tab, index) => (
      <button key={index}>{tab.name}</button>
    ))
    const currentTab = this.props.tabs[0]
    return (
      <div>
        {buttons}
          {this.props.tabs.length && (
            <div>
              {currentTab.content}
            </div>
          )}
      </div>
    )
  }
}
