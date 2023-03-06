import { Logger } from '../../util';

export class HouseTemplate {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  // Always the same for all kinds of concrete classes, so implemented in base
  buildFoundation() {
    this.logger.log('Building foundation with cement, iron rods and sand...');
  }

  buildWindows() {
    this.logger.log('Building glass window...');
  }

  // Abstract methods to be implemented in concrete classes
  buildPillars() {
    throw new AbstractError();
  }

  buildWalls() {
    throw new AbstractError();
  }

  // Template method, final if it were possible in javascript
  buildHouse() {
    this.buildFoundation();
    this.buildPillars();
    this.buildWalls();
    this.buildWindows();
    this.logger.log('House has been built.');
    this.logger.log('***************');
  }
}

// Concrete implementors
// 1/2
export class WoodenHouse extends HouseTemplate {
  buildWalls(): void {
    this.logger.log('Building wooden walls...');
  }

  buildPillars(): void {
    this.logger.log('Building pillars with wooden coating...');
  }
}

// 2/2
export class GlassHouse extends HouseTemplate {
  buildWalls(): void {
    this.logger.log('Building glass walls...');
  }

  buildPillars(): void {
    this.logger.log('Building pillars with glass coating...');
  }
}
