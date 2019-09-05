import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';

describe('Tabs component', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})