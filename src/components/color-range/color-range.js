import React, { Component, PropTypes } from 'react';

import './color-range.css';

const MIN_VALUE = 0;
const MAX_VALUE = 255;

class ColorRange extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    let { defaultValue } = this.props;

    this.state = {
      value: defaultValue
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = +event.target.value;
    let { onChange } = this.props;

    this.setState({ value });
    onChange(value);
  }

  render() {
    let { label } = this.props;
    let { value } = this.state;

    return (
      <div className="color-range">
        <div className="color-range_label">{label}</div>
        <input
          className="color-range_input"
          type="range"
          value={value}
          min={MIN_VALUE}
          max={MAX_VALUE}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ColorRange;
