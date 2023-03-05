import { FC } from 'react';
import { Logger, LogRenderer } from '../../util';
import { Employee } from './Composite';

function logEmployee(logger: Logger, employee: Employee) {
  logger.log(JSON.stringify(employee, null, 2));
}

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

  logEmployee(logger, ceo);
  ceo.subordinates.map((subordinate) => logEmployee(logger, subordinate));

  return <LogRenderer messages={logger.logs} />;
};

export default CompositePage;
