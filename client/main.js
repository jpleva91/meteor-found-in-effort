import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import MotivationsMain from './components/motivations/motivations_main';
import MotivationViewer from './components/motivations/motivations_viewer';
import Api from './components/api/api';
import ApiMotivations from './components/api/api_motivations';
import { Motivations } from '../imports/collections/motivations';

const routes = (
  <Router history={browserHistory}>
    <Route path ="/" component={App}>
      <Route path="motivations" component={MotivationsMain} />
      <Route path="motivations/:motivationId" component={MotivationViewer} />
    </Route>
    <Route path ="/api" component={Api}>
      <Route path="motivations" component={ApiMotivations} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  
  ReactDOM.render(routes, document.querySelector('.render-target'));
});