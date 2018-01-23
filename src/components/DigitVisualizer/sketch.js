import pi from '../../utils/pi';

/* eslint-disable */
const sketch = (p) => {
  let w = window.innerWidth * 0.95;
  let h = window.innerHeight * 0.8;
  let gridSize = 500;
  let numDigits = 100;
  let digitColors = ['#FFFFFF', '#E8E8E8', '#D3D3D3', '#BEBEBE', '#A8A8A8', '#888888', '#696969', '#505050', '#303030', '#000000'];

  p.setup = function () {
    console.log('setup');
    p.createCanvas(w, h, p.WEBGL);
    p.noLoop();
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    console.log('myCustomRedrawAccordingToNewPropsHandler');
    
    numDigits = props.numDigits;
    digitColors = props.digitColors;
    gridSize = props.gridSize;

    console.log(digitColors);
    console.log(pi);
  };

  p.draw = function () {
    console.log('draw');
    p.background(200);
    p.translate(-w/2,-h/2);
    for (let x = 0; x < w; x += gridSize) {
      for (let y = 0; y < h; y += gridSize) {

        let c = p.color(digitColors[0]);
        p.fill(c);
        p.rect(x-1, y-1, gridSize, gridSize);
      }
    }
  };
};

export default sketch;