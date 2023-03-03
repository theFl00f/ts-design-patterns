import { RouteObject } from 'react-router-dom';
import { AbstractFactoryPage, AdapterPage, HomePage } from '../pages';

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
  {
    path: '/adapter',
    element: <AdapterPage />,
    id: 'Adapter',
  },
];

export default ROUTES;
