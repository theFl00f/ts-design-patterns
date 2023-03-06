import { Logger } from '../../util';

// Real Class
export class Car {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  startEngine() {
    this.logger.log('Engine has started');
  }

  hitGas() {
    this.logger.log('Cas has accelerated');
  }

  hitBreak() {
    this.logger.log('Car has stopped');
  }

  parkCar() {
    this.logger.log('Car has been parked');
  }

  stopEngine() {
    this.logger.log('Engine has stopped');
  }
}

// Proxy class
export class ProxyCar extends Car {
  private car: Car;
  constructor() {
    super();
    this.car = new Car();
  }

  startEngine(): void {
    this.car.startEngine();
  }

  hitGas(): void {
    this.car.hitGas();
  }

  hitBreak(): void {
    this.car.hitBreak;
  }

  parkCar(): void {
    this.car.parkCar();
  }

  stopEngine(): void {
    this.car.stopEngine();
  }
}
