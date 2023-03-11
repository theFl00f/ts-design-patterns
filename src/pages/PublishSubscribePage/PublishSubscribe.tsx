import { Logger } from '../../util';

export class Provider {
  protected messageQueue: string[];
  protected subscribers: Record<string, Subscriber[]>;
  constructor() {
    this.messageQueue = [];
    this.subscribers = {};
  }

  notify(message: string) {
    this.messageQueue.push(message);
  }

  subscribe(message: string, subscriber: Subscriber) {
    if (!(message in this.subscribers)) {
      this.subscribers[message] = [];
    }

    this.subscribers[message].push(subscriber);
  }

  unsubscribe(message: string, subscriber: Subscriber) {
    const subscribers = this.subscribers[message];
    const index = subscribers.indexOf(subscriber);
    if (index > -1) {
      subscribers.splice(index, 1);
    }
  }

  update() {
    this.messageQueue.map((message) => {
      if (message in this.subscribers) {
        this.subscribers[message].map((subscriber) => subscriber.run(message));
      }
    });
  }
}

export class Publisher {
  protected provider: Provider;
  constructor(messageCenter: Provider) {
    this.provider = messageCenter;
  }

  publish(message: string) {
    this.provider.notify(message);
  }
}

export class Subscriber {
  protected name: string;
  protected provider: Provider;
  logger: Logger;
  constructor(name: string, messageCenter: Provider) {
    this.name = name;
    this.provider = messageCenter;
    this.logger = new Logger();
  }

  subscribe(message: string) {
    this.provider.subscribe(message, this);
  }

  run(message: string) {
    this.logger.log(`${this.name} & ${message}`);
  }
}
