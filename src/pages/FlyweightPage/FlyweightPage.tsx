import { FC } from 'react';
import { LogRenderer } from '../../util';
import { TeaMaker, TeaShop, TeaType } from './Flyweight';

const FlyweightPage: FC = () => {
  const teaShop = new TeaShop(new TeaMaker());

  teaShop.takeOrder(TeaType.Black, 1);
  teaShop.takeOrder(TeaType.Green, 2);
  teaShop.takeOrder(TeaType.Oolong, 5);
  teaShop.takeOrder(TeaType.Mate, 7);

  teaShop.serve();

  return <LogRenderer messages={teaShop.logger.logs} />;
};

export default FlyweightPage;
