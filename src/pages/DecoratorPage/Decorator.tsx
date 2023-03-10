import { InterfaceError, Logger } from '../../util';

// Defined Interface
export class Shape {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  draw() {
    throw new InterfaceError();
  }
}

// Concrete Implementors
// 1/2
export class Circle extends Shape {
  draw() {
    this.logger.log('Shape:Circle');
  }
}

// 2/2
export class Rectangle extends Shape {
  draw() {
    this.logger.log('Shape:Rectangle');
  }
}

// Abstract class
export class ShapeDecorator extends Shape {
  decoratedShape: Shape;
  constructor(decoratedShape: Shape) {
    super();
    this.decoratedShape = decoratedShape;
    this.logger = decoratedShape.logger;
  }

  draw() {
    this.decoratedShape.draw();
  }
}

// Concrete implementor of Abstract class
export class RedShapeDecorator extends ShapeDecorator {
  redDecoratedShape: Shape;
  constructor(decoratedShape: Shape) {
    super(decoratedShape);
    this.redDecoratedShape = decoratedShape;
  }

  setRedBorder(redDecoratedShape: Shape) {
    this.logger.log('Border color: Red');
  }

  draw() {
    this.redDecoratedShape.draw();
    this.setRedBorder(this.redDecoratedShape);
  }
}
