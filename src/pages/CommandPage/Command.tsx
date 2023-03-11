import { Logger } from '../../util';

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
export abstract class Command {
  logger: Logger;
  protected receiver: Receiver;
  constructor(receiver: Receiver) {
    this.logger = receiver.logger;
    this.receiver = receiver;
  }

  abstract execute(): void;
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
  private commands: Command[];
  constructor() {
    this.commands = [];
  }

  storeAndExecute(cmd: Command) {
    this.commands.push(cmd);
    cmd.execute();
  }
}
