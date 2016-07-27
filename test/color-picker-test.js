import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ColorPicker from '../src/components/color-picker';
import ColorRange from '../src/components/color-range';

describe('<ColorPicker />', () => {
  const wrapper = shallow(<ColorPicker value={[0, 0, 0]} onChange={() => {}} />);

  it('renders three <ColorRange /> components', () => {
    expect(wrapper.find(ColorRange)).to.have.length(3);
  })

  it('has background color', () => {
    expect(wrapper.prop('style')).to.deep.equal({ backgroundColor: 'rgb(0,0,0)' });
  })

  it('changes background color on change events', () => {
    wrapper.find(ColorRange).first().simulate('change', 255);
    wrapper.find(ColorRange).last().simulate('change', 255);
    expect(wrapper.prop('style')).to.deep.equal({ backgroundColor: 'rgb(255,0,255)' });
  })
})
