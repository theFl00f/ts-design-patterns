import { FC } from 'react';
import { ListLoggerRenderer } from '../../util';
import { GlassHouse, WoodenHouse } from './Template';

const TemplatePage: FC = () => {
  const glassHouse = new GlassHouse();
  const woodenHouse = new WoodenHouse();

  const houses = [glassHouse, woodenHouse];
  houses.map((house) => house.buildHouse());
  const loggers = houses.map((house) => house.logger);
  return <ListLoggerRenderer loggers={loggers} label={'house'} />;
};

export default TemplatePage;
