import { RouteObject } from 'react-router-dom';
import {
  AbstractFactoryPage,
  AdapterPage,
  BridgePage,
  HomePage,
} from '../pages';

export const ROUTES: Required<Pick<RouteObject, 'path' | 'element' | 'id'>>[] =
  [
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
    {
      path: '/bridge',
      element: <BridgePage />,
      id: 'Bridge',
    },
  ];

export default ROUTES;
