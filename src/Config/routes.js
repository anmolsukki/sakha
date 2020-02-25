import React from 'react';
import DefaultLayout from '../Containers';

const Home = React.lazy(() => import('../Views/HomePage/Home'));
const About = React.lazy(() => import('../Views/AboutPage/About'));

const routes = [
  { path: '/', name: 'Main', component: DefaultLayout, exact: true },

  { path: '/home', name: 'Home', component: Home, exact: true },
  { path: '/about', name: 'About', component: About, exact: true }
];

export default routes;
