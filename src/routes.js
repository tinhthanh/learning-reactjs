import React from 'react';
import Loadable from 'react-loadable'

import  DefaultLayout  from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}
const Module1 = Loadable({
  loader: () => import('./views/module1/Module1'),
  loading: Loading,
});
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/module1', name: 'module1', component: Module1 }
];

export default routes;
