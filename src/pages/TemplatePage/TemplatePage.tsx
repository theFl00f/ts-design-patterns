import { FC } from 'react';
import { LogRenderer } from '../../util';
import { GlassHouse, WoodenHouse } from './Template';

const TemplatePage: FC = () => {
  const glassHouse = new GlassHouse();
  const woodenHouse = new WoodenHouse();

  const houses = [glassHouse, woodenHouse];
  houses.map((house) => house.buildHouse());
  return (
    <ul>
      {houses.map((house, index) => (
        <li key={`house=${index + 1}`}>
          <LogRenderer messages={house.logger.logs} />
        </li>
      ))}
    </ul>
  );
};

export default TemplatePage;
