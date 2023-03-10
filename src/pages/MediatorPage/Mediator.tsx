import { Logger } from '../../util';

interface ChatRoomMediator {
  showMessage: (user: User, message: string) => void;
}

// Mediator
export class ChatRoom implements ChatRoomMediator {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }
  showMessage(user: User, message: string) {
    const time = new Date().toLocaleString();
    const sender = user.getName();

    this.logger.log(`${time} [${sender}]: ${message}`);
  }
}

export class User {
  protected name: string;
  protected chatMediator: ChatRoomMediator;
  constructor(name: string, chatMediator: ChatRoomMediator) {
    this.name = name;
    this.chatMediator = chatMediator;
  }

  getName() {
    return this.name;
  }

  send(message: string) {
    this.chatMediator.showMessage(this, message);
  }
}
