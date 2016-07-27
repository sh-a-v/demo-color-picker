import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ColorRange from '../src/components/color-range';

describe('<ColorRange />', () => {
  const wrapper = shallow(<ColorRange label="r" defaultValue={0} onChange={() => {}} />);

  it('renders input with type="range"', () => {
    expect(wrapper.find('input[type="range"]').length).to.equal(1);
  })

  it('simulates change events', () => {
    wrapper.find('input').first().simulate('change', { target: { value: 255 } });
    expect(wrapper.state('value')).to.equal(255);
  })
})
