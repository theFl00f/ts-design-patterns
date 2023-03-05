import { Logger } from '../../util';

export class AbstractFacade {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }
}

export class MonitorFacade extends AbstractFacade {
  setMonitor() {
    this.logger.log('You have a Monitor.');
  }
}

export class KeyboardFacade extends AbstractFacade {
  setKeyboard() {
    this.logger.log('You have a Keyboard.');
  }
}

export class MouseFacade extends AbstractFacade {
  setMouse() {
    this.logger.log('You have a Mouse.');
  }
}

export class LaptopFacade extends AbstractFacade {
  setLaptop() {
    this.logger.log('You have a Laptop.');
  }
}

export class ComputerFacade extends AbstractFacade {
  monitor: MonitorFacade;
  keyboard: KeyboardFacade;
  mouse: MouseFacade;
  laptop: LaptopFacade;
  constructor() {
    super();
    this.monitor = new MonitorFacade();
    this.keyboard = new KeyboardFacade();
    this.mouse = new MouseFacade();
    this.laptop = new LaptopFacade();
    this.monitor.logger = this.logger;
    this.keyboard.logger = this.logger;
    this.mouse.logger = this.logger;
    this.laptop.logger = this.logger;
  }

  buildComputer() {
    this.monitor.setMonitor();
    this.keyboard.setKeyboard();
    this.mouse.setMouse();
    this.laptop.setLaptop();
    this.logger.log('You have built a computer.');
  }
}
