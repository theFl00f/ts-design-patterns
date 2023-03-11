import { FC } from 'react';
import { Logger, LogRenderer } from '../../util';
import { ApartmentBuilder, Director, HouseBuilder } from './Builder';

const BuilderPage: FC = () => {
  const logger = new Logger();
  const director = new Director();

  const builders = [new HouseBuilder(), new ApartmentBuilder()];

  builders.map((builder) => {
    director.construct(builder);
    director.constructBuilding();
    const building = director.getBuilding();
    logger.log(building.toString());
  });

  return <LogRenderer messages={logger.logs} />;
};

export default BuilderPage;
