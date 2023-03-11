import { FC } from 'react';
import { Logger, LogRenderer } from '../../util';
import { Adapter, Car, Cat, Dog, Human } from './Adapter';

const AdapterPage: FC = () => {
  const logger = new Logger();

  const objects: Adapter<Dog | Cat | Human | Car>[] = [
    new Adapter(new Dog(), 'bark'),
    new Adapter(new Cat(), 'meow'),
    new Adapter(new Human(), 'speak'),
    new Adapter(new Car(), 'makeNoise', 3),
  ];

  objects.map((adapter) =>
    logger.log(`A ${adapter.name} goes ${adapter.makeNoise()}`)
  );

  return <LogRenderer messages={logger.logs} />;
};

export default AdapterPage;
