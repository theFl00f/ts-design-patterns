import { FC } from 'react';
import { ROUTES } from '../../router';
import HomePageLink from './HomePageLink';

const HomePage: FC = () => {
  return (
    <ul>
      {ROUTES.map((route) => (
        <li key={`${route.id}-home-page-link`}>
          <HomePageLink route={route} />
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
