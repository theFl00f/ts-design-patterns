import { FC, useEffect, useState } from 'react';
import { Logger, LogRenderer } from '../../util';
import { Adapter, Car, Cat, Dog, Human } from './Adapter';

const AdapterPage: FC = () => {
  const logger = new Logger();
  const [objects, setObjects] = useState<Adapter<Dog | Cat | Dog | Human>[]>(
    []
  );
  const dog = new Dog();
  const cat = new Cat();
  const human = new Human();
  const car = new Car();
  useEffect(() => {
    setObjects([
      new Adapter(dog, 'bark'),
      new Adapter(cat, 'meow'),
      new Adapter(human, 'speak'),
      new Adapter(car, 'makeNoise', 3),
    ]);
  }, []);
  objects.map((adapter) =>
    logger.log(`A ${adapter.name} goes ${adapter.makeNoise()}`)
  );

  return <LogRenderer messages={logger.logs} />;
};

export default AdapterPage;
