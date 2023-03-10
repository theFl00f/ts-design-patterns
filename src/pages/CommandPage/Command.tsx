import { AbstractError, Logger } from '../../util';

export class Receiver {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }
  action() {
    this.logger.log('action() is being called!');
  }
}

// Abstract Command
export class Command {
  logger: Logger;
  receiver: Receiver;
  constructor(receiver: Receiver) {
    this.logger = receiver.logger;
    this.receiver = receiver;
  }

  execute(): void {
    throw new AbstractError();
  }
}

// Concrete Commands

export class ConcreteCommand1 extends Command {
  constructor(reciever: Receiver) {
    super(reciever);
  }

  execute() {
    this.logger.log('`execute` method of ConcreteCommand1 is being called!');
    this.receiver.action();
  }
}

export class ConcreteCommand2 extends Command {
  constructor(reciever: Receiver) {
    super(reciever);
  }

  execute() {
    this.logger.log('`execute` method of ConcreteCommand2 is being called!');
    this.receiver.action();
  }
}

export class Invoker {
  commands: Command[];
  constructor() {
    this.commands = [];
  }

  storeAndExecute(cmd: Command) {
    this.commands.push(cmd);
    cmd.execute();
  }
}
