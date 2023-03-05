import { FC } from 'react';
import { Logger, LogRenderer } from '../../util';
import { ApartmentBuilder, Director, HouseBuilder } from './Builder';

const BuilderPage: FC = () => {
  const logger = new Logger();
  const director = new Director();

  director.construct(new HouseBuilder());
  director.constructBuilding();
  const house = director.getBuilding();
  logger.log(house.toString());

  director.construct(new ApartmentBuilder());
  director.constructBuilding();
  const apartment = director.getBuilding();
  logger.log(apartment.toString());

  return <LogRenderer messages={logger.logs} />;
};

export default BuilderPage;
