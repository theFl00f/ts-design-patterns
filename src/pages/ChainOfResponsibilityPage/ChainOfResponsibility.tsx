import { Logger } from '../../util';

export abstract class Account {
  logger: Logger;
  protected successor?: Account;
  protected balance?: Float;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  setNext(account: Account) {
    this.successor = account;
  }

  canPay(amount: Float) {
    return this.balance && this.balance >= amount;
  }

  pay(amountToPay: Float) {
    if (this.canPay(amountToPay)) {
      this.logger.log(`Paid ${amountToPay} using ${this.constructor.name}!`);
    } else if (this.successor) {
      this.logger.log(
        `Cannot pay using ${this.constructor.name}. Proceeding...`
      );
      this.successor.pay(amountToPay);
    } else {
      throw new Error('None of the accounts have enough balance.');
    }
  }
}

export class Bank extends Account {
  protected balance: Float;
  constructor(logger: Logger, balance: Float) {
    super(logger);
    this.balance = balance;
  }
}

export class PayPal extends Account {
  protected balance: Float;
  constructor(logger: Logger, balance: Float) {
    super(logger);
    this.balance = balance;
  }
}

export class Stripe extends Account {
  protected balance: Float;
  constructor(logger: Logger, balance: Float) {
    super(logger);
    this.balance = balance;
  }
}
