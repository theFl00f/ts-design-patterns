import { FC } from 'react';
import { Logger, LogRenderer } from '../../util';
import { Bank, PayPal, Stripe } from './ChainOfResponsibility';

const ChainOfResponsibilityPage: FC = () => {
  const logger = new Logger();
  const bank = new Bank(logger, 100.0);
  const paypal = new PayPal(logger, 200.0);
  const stripe = new Stripe(logger, 300.0);

  bank.setNext(paypal);
  paypal.setNext(stripe);

  bank.pay(259.0);

  return <LogRenderer messages={logger.logs} />;
};

export default ChainOfResponsibilityPage;
