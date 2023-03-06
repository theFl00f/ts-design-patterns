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
  MementoPage,
  MVCPage,
  ObserverPage,
  PrototypePage,
  ProxyPage,
  PublishSubscribePage,
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
    {
      path: '/memento',
      element: <MementoPage />,
      id: 'Memento',
    },
    {
      path: '/mvc-pattern',
      element: <MVCPage />,
      id: 'MVC Pattern',
    },
    {
      path: '/observer',
      element: <ObserverPage />,
      id: 'Observer',
    },
    {
      path: '/prototype',
      element: <PrototypePage />,
      id: 'Prototype',
    },
    {
      path: '/proxy',
      element: <ProxyPage />,
      id: 'Proxy',
    },
    {
      path: 'publish-subscribe',
      element: <PublishSubscribePage />,
      id: 'Publish-Subscribe (PubSub)',
    },
  ];

export default ROUTES;
