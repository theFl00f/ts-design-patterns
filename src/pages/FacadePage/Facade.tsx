import { Logger } from '../../util';

export class AbstractFacade {
  logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
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
  private monitor: MonitorFacade;
  private keyboard: KeyboardFacade;
  private mouse: MouseFacade;
  private laptop: LaptopFacade;
  constructor() {
    const logger = new Logger();
    super(logger);
    this.monitor = new MonitorFacade(logger);
    this.keyboard = new KeyboardFacade(logger);
    this.mouse = new MouseFacade(logger);
    this.laptop = new LaptopFacade(logger);
  }

  buildComputer() {
    this.monitor.setMonitor();
    this.keyboard.setKeyboard();
    this.mouse.setMouse();
    this.laptop.setLaptop();
    this.logger.log('You have built a computer.');
  }
}
