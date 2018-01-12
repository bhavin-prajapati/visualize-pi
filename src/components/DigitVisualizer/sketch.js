/* eslint-disable */
const sketch = (p) => {
  let w = window.innerWidth * 0.95;
  let h = window.innerHeight * 0.8;
  let gridSize = 20;
  let numDigits = 100;
  let digitColors = ['#FFFFFF', '#E8E8E8', '#D3D3D3', '#BEBEBE', '#A8A8A8', '#888888', '#696969', '#505050', '#303030', '#000000'];

  p.setup = function () {
    p.createCanvas(w, h, p.WEBGL);
    p.noLoop();
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation) {
      numDigits = props.numDigits;
      digitColors = props.digitColors;
      gridSize = props.gridSize;
    }
  };

  p.draw = function () {
    p.background(200);
    p.translate(-w/2,-h/2);
    for (let x = 0; x < w; x += gridSize) {
      for (let y = 0; y < h; y += gridSize) {
        let c = p.color(digitColors[x*gridSize%10]);
        p.fill(c);
        p.rect(x-1, y-1, gridSize, gridSize);
      }
    }
  };
};

export default sketch;