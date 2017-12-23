import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import MotivationsMain from './components/motivations/motivations_main';
import { Motivations } from '../imports/collections/motivations';

const routes = (
  <Router history={browserHistory}>
    <Route path ="/" component={App}>
      <Route path="motivations" component={MotivationsMain} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});