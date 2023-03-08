import { FC } from 'react';
import { Logger, LogRenderer } from '../../util';
import { UserFactory, UserType } from './SimpleFactory';

const SimpleFactoryPage: FC = () => {
  const logger = new Logger();

  const user = UserFactory.create('Alfred', UserType.User);
  const customer = UserFactory.create('Annie', UserType.Customer);
  const admin = UserFactory.create('Mr Mittens', UserType.Admin);

  const users = [user, customer, admin];
  users.map((user) => logger.log(user.toString()));

  return <LogRenderer messages={logger.logs} />;
};

export default SimpleFactoryPage;
