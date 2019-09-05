import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './Accordian';

describe('Accordian component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});