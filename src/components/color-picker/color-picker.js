import React, { Component, PropTypes } from 'react';

import ColorRange from '../color-range';
import './color-picker.css';

const RANGES = ['r', 'g', 'b'];

class ColorPicker extends Component {
  static propTypes = {
    value: PropTypes.arrayOf(PropTypes.number).isRequired,
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props);

    let { value } = props;

    this.state = {
      value,
      defaultValue: value
    };
  }

  get style() {
    let { value } = this.state;

    return {
      backgroundColor: `rgb(${value.join(',')})`
    }
  }

  handleColorRangeChange(colorRangeIndex, colorRangeValue) {
    let { value } = this.state;

    value[colorRangeIndex] = colorRangeValue;
    this.setState({ value });
  }

  render() {
    let { defaultValue } = this.state;

    return (
      <div className="color-picker" style={this.style}>
        {RANGES.map((range, index) => {
          return (
            <div className="color-picker_range" key={index}>
              <ColorRange
                label={range}
                defaultValue={defaultValue[index]}
                onChange={this.handleColorRangeChange.bind(this, index)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ColorPicker;
