import { Logger } from '../../util';

export class ComputerPart {
  accept(computerPartVisitor: ComputerPartVisitor) {
    throw new AbstractError();
  }
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

export class ComputerPartVisitor {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  visitComputer(computer: Computer) {
    throw new AbstractError();
  }

  visitMouse(mouse: Mouse) {
    throw new AbstractError();
  }

  visitKeyboard(keyboard: Keyboard) {
    throw new AbstractError();
  }

  visitMonitor(monitor: Monitor) {
    throw new AbstractError();
  }
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
