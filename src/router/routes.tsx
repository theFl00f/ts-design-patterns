import { RouteObject } from 'react-router-dom';
import Pages from '../pages';

export const ROUTES: Required<Pick<RouteObject, 'path' | 'element' | 'id'>>[] =
  [
    {
      path: '/',
      element: <Pages.HomePage />,
      id: 'Home',
    },
    {
      path: '/abstract-factory',
      element: <Pages.AbstractFactoryPage />,
      id: 'Abstract Factory',
    },
    {
      path: '/adapter',
      element: <Pages.AdapterPage />,
      id: 'Adapter',
    },
    {
      path: '/bridge',
      element: <Pages.BridgePage />,
      id: 'Bridge',
    },
    {
      path: '/builder',
      element: <Pages.BuilderPage />,
      id: 'Builder',
    },
    {
      path: '/command',
      element: <Pages.CommandPage />,
      id: 'Command',
    },
    {
      path: '/composite',
      element: <Pages.CompositePage />,
      id: 'Composite',
    },
    {
      path: '/decorator',
      element: <Pages.DecoratorPage />,
      id: 'Decorator',
    },
    {
      path: '/facade',
      element: <Pages.FacadePage />,
      id: 'Facade',
    },
    {
      path: '/factory-method',
      element: <Pages.FactoryMethodPage />,
      id: 'Factory Method',
    },
    {
      path: '/iterator',
      element: <Pages.IteratorPage />,
      id: 'Iterator',
    },
    {
      path: '/memento',
      element: <Pages.MementoPage />,
      id: 'Memento',
    },
    {
      path: '/mvc-pattern',
      element: <Pages.MVCPage />,
      id: 'MVC Pattern',
    },
    {
      path: '/observer',
      element: <Pages.ObserverPage />,
      id: 'Observer',
    },
    {
      path: '/prototype',
      element: <Pages.PrototypePage />,
      id: 'Prototype',
    },
    {
      path: '/proxy',
      element: <Pages.ProxyPage />,
      id: 'Proxy',
    },
    {
      path: '/publish-subscribe',
      element: <Pages.PublishSubscribePage />,
      id: 'Publish-Subscribe (PubSub)',
    },
    {
      path: '/strategy',
      element: <Pages.StrategyPage />,
      id: 'Strategy',
    },
    {
      path: '/template',
      element: <Pages.TemplatePage />,
      id: 'Template',
    },
    {
      path: '/visitor',
      element: <Pages.VisitorPage />,
      id: 'Visitor',
    },
  ];

export default ROUTES;
