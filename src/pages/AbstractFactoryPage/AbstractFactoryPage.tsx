import { FC } from 'react';
import ListLoggerRenderer from '../../util/ListLoggerRenderer';
import { CatFactory, DogFactory, Petshop } from './AbstractFactory';

const AbstractFactoryPage: FC = () => {
  const dogShop = new Petshop(new DogFactory());
  const catShop = new Petshop(new CatFactory());

  const shops = [dogShop, catShop];

  shops.map((shop) => shop.showPet());
  const loggers = shops.map((shop) => shop.logger);

  return <ListLoggerRenderer loggers={loggers} label={'shop'} />;
};

export default AbstractFactoryPage;
