import { FC } from 'react';
import { Logger, LogRenderer } from '../../util';
import { Dog, Person } from './Prototype';

const PrototypePage: FC = () => {
  const logger = new Logger();
  const person = new Person('Jones');
  const dog = new Dog('Woooof!');
  const prototypes = [person, person.doClone(), dog, dog.doClone()];
  prototypes.map((prototype) => logger.log(prototype.toString()));
  return <LogRenderer messages={logger.logs} />;
};

export default PrototypePage;
