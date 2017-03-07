import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import CreateEditImage from './components/CreateEditImage';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path=":state-image" component={CreateEditImage} />
      <Route path=":state-image/:id" component={CreateEditImage} />
    </Route>
  </Router>
), document.getElementById('root'));