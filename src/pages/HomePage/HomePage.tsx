import { FC, Fragment } from 'react';
import { ROUTES } from '../../router';
import HomePageLink from './HomePageLink';

interface Props {}

const HomePage: FC<Props> = () => {
  return (
    <Fragment>
      {ROUTES.map((route) => (
        <HomePageLink route={route} key={`${route.id}-home-page-link`} />
      ))}
    </Fragment>
  );
};

export default HomePage;
