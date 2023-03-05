import { RouteObject } from 'react-router-dom';
import {
  AbstractFactoryPage,
  AdapterPage,
  BridgePage,
  BuilderPage,
  CommandPage,
  CompositePage,
  DecoratorPage,
  FacadePage,
  FactoryMethodPage,
  HomePage,
  IteratorPage,
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
    {
      path: '/builder',
      element: <BuilderPage />,
      id: 'Builder',
    },
    {
      path: '/command',
      element: <CommandPage />,
      id: 'Command',
    },
    {
      path: '/composite',
      element: <CompositePage />,
      id: 'Composite',
    },
    {
      path: '/decorator',
      element: <DecoratorPage />,
      id: 'Decorator',
    },
    {
      path: '/facade',
      element: <FacadePage />,
      id: 'Facade',
    },
    {
      path: '/factory-method',
      element: <FactoryMethodPage />,
      id: 'Factory Method',
    },
    {
      path: '/iterator',
      element: <IteratorPage />,
      id: 'Iterator',
    },
  ];

export default ROUTES;
