import { UnknownError } from '../../util';

export enum UserType {
  User = 'user',
  Customer = 'customer',
  Admin = 'admin',
}

class User {
  protected name: string;
  protected isAdmin: boolean;
  protected cart?: string[];
  constructor(name: string) {
    this.name = name;
    this.isAdmin = false;
  }

  toString() {
    const string = `Name: ${this.name}, isAdmin: ${this.isAdmin}`;
    const cartString = this.cart ? `, cart: ${JSON.stringify(this.cart)}` : '';
    return string + cartString;
  }
}

class Customer extends User {
  constructor(name: string) {
    super(name);
    this.cart = [];
  }
}

class Admin extends User {
  constructor(name: string) {
    super(name);
    this.isAdmin = true;
  }
}

export class UserFactory {
  static create(name: string, type: UserType) {
    switch (type) {
      case UserType.User:
        return new User(name);
      case UserType.Customer:
        return new Customer(name);
      case UserType.Admin:
        return new Admin(name);
      default:
        throw new UnknownError('UserType');
    }
  }
}
