import { RouteObject } from 'react-router-dom';
import Pages from '../pages';
import { PatternLayout } from '../util';

export const ROUTES: Required<Pick<RouteObject, 'path' | 'element' | 'id'>>[] =
  [
    {
      path: '/',
      element: <Pages.HomePage />,
      id: 'Home',
    },
    {
      path: '/abstract-factory',
      element: (
        <PatternLayout>
          <Pages.AbstractFactoryPage />
        </PatternLayout>
      ),
      id: 'Abstract Factory',
    },
    {
      path: '/adapter',
      element: (
        <PatternLayout>
          <Pages.AdapterPage />
        </PatternLayout>
      ),
      id: 'Adapter',
    },
    {
      path: '/bridge',
      element: (
        <PatternLayout>
          <Pages.BridgePage />
        </PatternLayout>
      ),
      id: 'Bridge',
    },
    {
      path: '/builder',
      element: (
        <PatternLayout>
          <Pages.BuilderPage />
        </PatternLayout>
      ),
      id: 'Builder',
    },
    {
      path: '/command',
      element: (
        <PatternLayout>
          <Pages.CommandPage />
        </PatternLayout>
      ),
      id: 'Command',
    },
    {
      path: '/composite',
      element: (
        <PatternLayout>
          <Pages.CompositePage />
        </PatternLayout>
      ),
      id: 'Composite',
    },
    {
      path: '/decorator',
      element: (
        <PatternLayout>
          <Pages.DecoratorPage />
        </PatternLayout>
      ),
      id: 'Decorator',
    },
    {
      path: '/facade',
      element: (
        <PatternLayout>
          <Pages.FacadePage />
        </PatternLayout>
      ),
      id: 'Facade',
    },
    {
      path: '/factory-method',
      element: (
        <PatternLayout>
          <Pages.FactoryMethodPage />
        </PatternLayout>
      ),
      id: 'Factory Method',
    },
    {
      path: '/iterator',
      element: (
        <PatternLayout>
          <Pages.IteratorPage />
        </PatternLayout>
      ),
      id: 'Iterator',
    },
    {
      path: '/memento',
      element: (
        <PatternLayout>
          <Pages.MementoPage />
        </PatternLayout>
      ),
      id: 'Memento',
    },
    {
      path: '/mvc-pattern',
      element: (
        <PatternLayout>
          <Pages.MVCPage />
        </PatternLayout>
      ),
      id: 'MVC Pattern',
    },
    {
      path: '/observer',
      element: (
        <PatternLayout>
          <Pages.ObserverPage />
        </PatternLayout>
      ),
      id: 'Observer',
    },
    {
      path: '/prototype',
      element: (
        <PatternLayout>
          <Pages.PrototypePage />
        </PatternLayout>
      ),
      id: 'Prototype',
    },
    {
      path: '/proxy',
      element: (
        <PatternLayout>
          <Pages.ProxyPage />
        </PatternLayout>
      ),
      id: 'Proxy',
    },
    {
      path: '/publish-subscribe',
      element: (
        <PatternLayout>
          <Pages.PublishSubscribePage />
        </PatternLayout>
      ),
      id: 'Publish-Subscribe (PubSub)',
    },
    {
      path: '/strategy',
      element: (
        <PatternLayout>
          <Pages.StrategyPage />
        </PatternLayout>
      ),
      id: 'Strategy',
    },
    {
      path: '/template',
      element: (
        <PatternLayout>
          <Pages.TemplatePage />
        </PatternLayout>
      ),
      id: 'Template',
    },
    {
      path: '/visitor',
      element: (
        <PatternLayout>
          <Pages.VisitorPage />
        </PatternLayout>
      ),
      id: 'Visitor',
    },
  ];

export default ROUTES;
