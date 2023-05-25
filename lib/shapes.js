class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
  class Triangle extends Shape {
    render() {
      // Renders a triangle SVG element with the color the user chooses
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      // Renders a rectangle SVG element with the users color
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      // Renders a circle SVG element with the users color
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  //exports the classes above
  module.exports = {Triangle, Square, Circle };
  