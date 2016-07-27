import React, { Component } from 'react';

import ColorPicker from './components/color-picker';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleColorPickerChange = this.handleColorPickerChange.bind(this);
  }

  handleColorPickerChange(color) {
    console.info(`color is ${color}`);
  }

  render() {
    return (
      <div className="app">
        <ColorPicker value={[10, 50, 90]} onChange={this.handleColorPickerChange} />
      </div>
    );
  }
}

export default App;
