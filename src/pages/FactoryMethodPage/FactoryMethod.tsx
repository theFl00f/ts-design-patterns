import { Logger, UnknownError } from '../../util';

// Defined Interface
export abstract class Shape {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  abstract draw(): void;
}

// Concrete Implementors
// 1/3
export class Square extends Shape {
  draw(): void {
    this.logger.log('Square has been created!');
  }
}

// 2/3
export class Rectangle extends Shape {
  draw(): void {
    this.logger.log('Rectangle has been created!');
  }
}

// 3/3
export class Circle extends Shape {
  draw(): void {
    this.logger.log('Circle has been created!');
  }
}

export enum ShapeType {
  Square = 'SQUARE',
  Rectangle = 'RECTANGLE',
  Circle = 'CIRCLE',
}

export class ShapeFactory {
  // Use getShape method to get object of type shape
  getShape(shapeType: ShapeType): Shape {
    switch (shapeType) {
      case ShapeType.Square:
        return new Square();
      case ShapeType.Rectangle:
        return new Rectangle();
      case ShapeType.Circle:
        return new Circle();
      default:
        throw new UnknownError('shapeType');
    }
  }
}
