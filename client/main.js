import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import MotivationsList from './components/motivations/motivations_list';

const routes = (
  <Router history={browserHistory}>
    <Route path ="/" component={App}>
      <Route path="motivations" component={MotivationsList} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});