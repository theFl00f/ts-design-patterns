import { RouteObject } from 'react-router-dom';
import { AbstractFactoryPage, HomePage } from '../pages';

export const ROUTES: Pick<RouteObject, 'path' | 'element' | 'id'>[] = [
  {
    path: '/',
    element: <HomePage />,
    id: 'Home',
  },
  {
    path: '/abstract-factory',
    element: <AbstractFactoryPage />,
    id: 'Abstract Factory',
  },
];

export default ROUTES;
