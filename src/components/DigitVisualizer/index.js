import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketchVisualizer from './sketch';
import s from './styles.css';

class DigitVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numDigits: 100,
      digitColors: ['#FFFFFF', '#E8E8E8', '#D3D3D3', '#BEBEBE', '#A8A8A8', '#888888', '#696969', '#505050', '#303030', '#000000'],
      gridSize: 20
    };

    this.handleNumDigitChange = this.handleNumDigitChange.bind(this);
    this.handleDigitColorChange = this.handleDigitColorChange.bind(this);
  }

  handleNumDigitChange(event) {
    this.setState({ numDigits: event.target.value });
  }

  handleSquareChange(event) {
    this.setState({ gridSize: event.target.gridSize });
  }

  handleDigitColorChange(event) {
    const newDigitColors = this.state.digitColors;
    newDigitColors[event.target.name] = event.target.value;
    this.setState({ digitColor: newDigitColors });
  }

  render() {
    return (
      <div>
        <div className={s.visualizerInput}>
          <span>Number of digits to render<input type="text" value={this.state.numDigits} onChange={this.handleNumDigitChange} /></span>
          <span>Grid Size<input type="text" value={this.state.gridSize} onChange={this.handleSquareChange} /></span>
          <span> 0: <input type="text" name="0" value={this.state.digitColors[0]} onChange={this.handleDigitColorChange} /></span>
          <span> 1: <input type="text" name="1" value={this.state.digitColors[1]} onChange={this.handleDigitColorChange} /></span>
          <span> 2: <input type="text" name="2" value={this.state.digitColors[2]} onChange={this.handleDigitColorChange} /></span>
          <span> 3: <input type="text" name="3" value={this.state.digitColors[3]} onChange={this.handleDigitColorChange} /></span>
          <span> 4: <input type="text" name="4" value={this.state.digitColors[4]} onChange={this.handleDigitColorChange} /></span>
          <span> 5: <input type="text" name="5" value={this.state.digitColors[5]} onChange={this.handleDigitColorChange} /></span>
          <span> 6: <input type="text" name="6" value={this.state.digitColors[6]} onChange={this.handleDigitColorChange} /></span>
          <span> 7: <input type="text" name="7" value={this.state.digitColors[7]} onChange={this.handleDigitColorChange} /></span>
          <span> 8: <input type="text" name="8" value={this.state.digitColors[8]} onChange={this.handleDigitColorChange} /></span>
          <span> 9: <input type="text" name="9" value={this.state.digitColors[9]} onChange={this.handleDigitColorChange} /></span>
        </div>
        <P5Wrapper
          sketch={sketchVisualizer}
          numDigits={this.state.numDigits}
          digitColors={this.state.digitColors}
          gridSize={this.state.gridSize} />
      </div>
    );
  }
}

export default DigitVisualizer;