import { FC } from 'react';
import { LogRenderer } from '../../util';
import { ProxyCar } from './Proxy';

const ProxyPage: FC = () => {
  const proxy = new ProxyCar();
  proxy.startEngine();
  proxy.hitGas();
  proxy.hitBreak();
  proxy.parkCar();
  proxy.stopEngine();
  return <LogRenderer messages={proxy.logger.logs} />;
};

export default ProxyPage;
