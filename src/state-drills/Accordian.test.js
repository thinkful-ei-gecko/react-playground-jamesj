import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './Accordian';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Accordian component', () => {
  const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ];

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders an empty menu item when no value given', () => {
    const wrapper = shallow(<Accordian />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders no sections active by default', () => {
    const wrapper = shallow(<Accordian sections={sections} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('opens a clicked section', () => {
    const wrapper = shallow(<Accordian sections={sections} />);
    wrapper.find('button').at(2).simulate('click');
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('only keeps latest section open when multiple are clicked', () => {
    const wrapper = shallow(<Accordian sections={sections} />);
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});