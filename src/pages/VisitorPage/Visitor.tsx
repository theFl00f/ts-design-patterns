import { Logger } from '../../util';

export abstract class ComputerPart {
  abstract accept(computerPartVisitor: ComputerPartVisitor): void;
}

export class Keyboard extends ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor): void {
    computerPartVisitor.visitKeyboard(this);
  }
}

export class Monitor extends ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor): void {
    computerPartVisitor.visitMonitor(this);
  }
}

export class Mouse extends ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor): void {
    computerPartVisitor.visitMouse(this);
  }
}

export class Computer extends ComputerPart {
  parts: ComputerPart[];
  constructor() {
    super();
    this.parts = [new Mouse(), new Keyboard(), new Monitor()];
  }

  accept(computerPartVisitor: ComputerPartVisitor): void {
    this.parts.map((part) => part.accept(computerPartVisitor));
    computerPartVisitor.visitComputer(this);
  }
}

export abstract class ComputerPartVisitor {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  abstract visitComputer(computer: Computer): void;
  abstract visitMouse(mouse: Mouse): void;
  abstract visitKeyboard(keyboard: Keyboard): void;
  abstract visitMonitor(monitor: Monitor): void;
}

export class ComputerPartDisplayVisitor extends ComputerPartVisitor {
  visitComputer(computer: Computer): void {
    this.logger.log('Displaying computer.');
  }
  visitMouse(mouse: Mouse): void {
    this.logger.log('Displaying mouse.');
  }
  visitKeyboard(keyboard: Keyboard): void {
    this.logger.log('Displaying keyboard.');
  }
  visitMonitor(monitor: Monitor): void {
    this.logger.log('Displaying monitor.');
  }
}
