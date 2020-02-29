import React from 'react';
import DefaultLayout from '../Containers';

const Home = React.lazy(() => import('../Views/HomePage/Home'));
const About = React.lazy(() => import('../Views/AboutPage/About'));
const BeyondMeditation = React.lazy(() => import('../Views/BeyondMeditationPage/BeyondMeditation'));
const Therapies = React.lazy(() => import('../Views/TherapiesPage/Therapies'));
const Quotes = React.lazy(() => import('../Views/QuotesPage/Quotes'));
const YtVideos = React.lazy(() => import('../Views/Videos/YtVideos'));

const routes = [
  { path: '/', name: 'Main', component: DefaultLayout, exact: true },

  { path: '/home', name: 'Home', component: Home, exact: true },
  { path: '/about', name: 'About', component: About, exact: true },
  { path: '/meditation', name: 'Beyond Meditation', component: BeyondMeditation, exact: true },
  { path: '/therapies', name: 'Therapies', component: Therapies, exact: true },
  { path: '/quotes', name: 'Quotes', component: Quotes, exact: true },
  { path: '/videos', name: 'Videos', component: YtVideos, exact: true }
];

export default routes;
