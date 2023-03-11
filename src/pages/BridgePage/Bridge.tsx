import { Logger } from '../../util';

// Refined Abstraction
abstract class DrawingAPI {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  abstract drawCircle(x: Int, y: Int, radius: Float): void;
}

export class CircleShape {
  private x: Int;
  private y: Int;
  private radius: Float;
  drawingApi: DrawingAPI;
  constructor(x: Int, y: Int, radius: Float, drawingApi: DrawingAPI) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.drawingApi = drawingApi;
  }

  // low-level, i.e. Implementation specific
  draw() {
    this.drawingApi.drawCircle(this.x, this.y, this.radius);
  }

  // high-level, i.e. Abstraction specific
  scale(percent: Float) {
    this.radius *= percent;
  }
}

// Concrete Implementors:
// 1/2
export class DrawingAPI1 extends DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void {
    this.logger.log(`API1.circle at ${x}:${y}, radius ${radius}`);
  }
}

// 2/2
export class DrawingAPI2 extends DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void {
    this.logger.log(`API2.circle at ${x}:${y}, radius ${radius}`);
  }
}
