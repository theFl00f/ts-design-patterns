import { Logger } from '../../util';

// Defined Interface
export abstract class Shape {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  abstract draw(): void;
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
export abstract class ShapeDecorator extends Shape {
  protected decoratedShape: Shape;
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
  private redDecoratedShape: Shape;
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
