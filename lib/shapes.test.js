const { Triangle, Square, Circle, } = require('./shapes.js');

//tests the triagle svg elemnt with the color blue
describe('Triangle', () => {
  test('render method should return the SVG shape with the correct color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toBe(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});
// tests square with the color greeen
describe('Square', () => {
  test('render method should return the SVG square with the correct color', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toBe(
      '<rect x="73" y="40" width="160" height="160" fill="green" />'
    );
  });
});
//tests circle with the color yellow
describe('Circle', () => {
  test('render method should return the SVG circle with the correct color', () => {
    const circle = new Circle();
    circle.setColor('yellow');
    expect(circle.render()).toBe(
      '<circle cx="150" cy="115" r="80" fill="yellow" />'
    );
  });
});
