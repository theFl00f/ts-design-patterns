import { RouteObject } from 'react-router-dom';
import Pages from '../pages';
import { PatternLayout } from '../util';

export type PatternType =
  | 'Creational'
  | 'Structural'
  | 'Behavioural'
  | 'Ungrouped';

export type RouteType = Required<
  Pick<RouteObject, 'path' | 'element' | 'id'> & { patternType: PatternType }
>;

export const ROUTES: RouteType[] = [
  {
    path: '/',
    element: <Pages.HomePage />,
    id: 'Home',
    patternType: 'Ungrouped',
  },
  {
    path: '/abstract-factory',
    element: (
      <PatternLayout>
        <Pages.AbstractFactoryPage />
      </PatternLayout>
    ),
    id: 'Abstract Factory',
    patternType: 'Creational',
  },
  {
    path: '/adapter',
    element: (
      <PatternLayout>
        <Pages.AdapterPage />
      </PatternLayout>
    ),
    id: 'Adapter',
    patternType: 'Structural',
  },
  {
    path: '/bridge',
    element: (
      <PatternLayout>
        <Pages.BridgePage />
      </PatternLayout>
    ),
    id: 'Bridge',
    patternType: 'Structural',
  },
  {
    path: '/builder',
    element: (
      <PatternLayout>
        <Pages.BuilderPage />
      </PatternLayout>
    ),
    id: 'Builder',
    patternType: 'Creational',
  },
  {
    path: '/command',
    element: (
      <PatternLayout>
        <Pages.CommandPage />
      </PatternLayout>
    ),
    id: 'Command',
    patternType: 'Behavioural',
  },
  {
    path: '/composite',
    element: (
      <PatternLayout>
        <Pages.CompositePage />
      </PatternLayout>
    ),
    id: 'Composite',
    patternType: 'Structural',
  },
  {
    path: '/decorator',
    element: (
      <PatternLayout>
        <Pages.DecoratorPage />
      </PatternLayout>
    ),
    id: 'Decorator',
    patternType: 'Structural',
  },
  {
    path: '/facade',
    element: (
      <PatternLayout>
        <Pages.FacadePage />
      </PatternLayout>
    ),
    id: 'Facade',
    patternType: 'Structural',
  },
  {
    path: '/factory-method',
    element: (
      <PatternLayout>
        <Pages.FactoryMethodPage />
      </PatternLayout>
    ),
    id: 'Factory Method',
    patternType: 'Creational',
  },
  {
    path: '/iterator',
    element: (
      <PatternLayout>
        <Pages.IteratorPage />
      </PatternLayout>
    ),
    id: 'Iterator',
    patternType: 'Behavioural',
  },
  {
    path: '/memento',
    element: (
      <PatternLayout>
        <Pages.MementoPage />
      </PatternLayout>
    ),
    id: 'Memento',
    patternType: 'Behavioural',
  },
  {
    path: '/mvc-pattern',
    element: (
      <PatternLayout>
        <Pages.MVCPage />
      </PatternLayout>
    ),
    id: 'MVC Pattern',
    patternType: 'Structural',
  },
  {
    path: '/observer',
    element: (
      <PatternLayout>
        <Pages.ObserverPage />
      </PatternLayout>
    ),
    id: 'Observer',
    patternType: 'Behavioural',
  },
  {
    path: '/prototype',
    element: (
      <PatternLayout>
        <Pages.PrototypePage />
      </PatternLayout>
    ),
    id: 'Prototype',
    patternType: 'Creational',
  },
  {
    path: '/proxy',
    element: (
      <PatternLayout>
        <Pages.ProxyPage />
      </PatternLayout>
    ),
    id: 'Proxy',
    patternType: 'Structural',
  },
  {
    path: '/publish-subscribe',
    element: (
      <PatternLayout>
        <Pages.PublishSubscribePage />
      </PatternLayout>
    ),
    id: 'Publish-Subscribe (PubSub)',
    patternType: 'Behavioural',
  },
  {
    path: '/strategy',
    element: (
      <PatternLayout>
        <Pages.StrategyPage />
      </PatternLayout>
    ),
    id: 'Strategy',
    patternType: 'Behavioural',
  },
  {
    path: '/template',
    element: (
      <PatternLayout>
        <Pages.TemplatePage />
      </PatternLayout>
    ),
    id: 'Template',
    patternType: 'Behavioural',
  },
  {
    path: '/visitor',
    element: (
      <PatternLayout>
        <Pages.VisitorPage />
      </PatternLayout>
    ),
    id: 'Visitor',
    patternType: 'Behavioural',
  },
];

export default ROUTES;
