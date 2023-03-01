import { FC, Fragment } from 'react';
import { LogRenderer } from '../../util';
import { CatFactory, DogFactory, Petshop } from './AbstractFactory';

interface Props {}

const AbstractFactoryPage: FC<Props> = () => {
  const dogShop = new Petshop(new DogFactory());
  const catShop = new Petshop(new CatFactory());
  dogShop.showPet();
  catShop.showPet();

  return (
    <Fragment>
      <LogRenderer messages={dogShop.logger.logs} />
      <LogRenderer messages={catShop.logger.logs} />
    </Fragment>
  );
};

export default AbstractFactoryPage;
