import { FC } from 'react';
import { Logger, LogRenderer } from '../../util';
import { Employee } from './Composite';

const CompositePage: FC = () => {
  const logger = new Logger();

  const ceo = new Employee('John', 'CEO', 30000);

  const headSales = new Employee('Robert', 'Head Sales', 20000);
  const headMarketing = new Employee('Michelle', 'Head Marketing', 20000);

  const salesExecutive1 = new Employee('Richard', 'Sales Executive', 10000);
  const salesExecutive2 = new Employee('Coleen', 'Sales Executive', 10000);

  const clerk1 = new Employee('Laura', 'Marketing', 10000);
  const clerk2 = new Employee('Bob', 'Marketing', 10000);

  ceo.add(headSales);
  ceo.add(headMarketing);

  headSales.add(salesExecutive1);
  headSales.add(salesExecutive2);

  headMarketing.add(clerk1);
  headMarketing.add(clerk2);

  logger.log(ceo.toString());
  ceo.subordinates.map((subordinate1) => {
    logger.log(`Subordinate to ${ceo.name}:`);
    logger.log(subordinate1.toString());
    logger.log(`Subordinates to ${subordinate1.name}:`);
    subordinate1.subordinates.map((subordinate2) => {
      logger.log(subordinate2.toString());
    });
  });

  return <LogRenderer messages={logger.logs} />;
};

export default CompositePage;
