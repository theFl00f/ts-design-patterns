import { FC } from 'react';
import { Logger, LogRenderer } from '../../util';
import { Dog, Person } from './Prototype';

const PrototypePage: FC = () => {
  const logger = new Logger();
  const person1 = new Person('Jones');
  const person2 = person1.doClone();
  const dog1 = new Dog('Woooof!');
  const dog2 = dog1.doClone();
  const prototypes = [person1, person2, dog1, dog2];
  prototypes.map((prototype) => logger.log(prototype.toString()));
  return <LogRenderer messages={logger.logs} />;
};

export default PrototypePage;
