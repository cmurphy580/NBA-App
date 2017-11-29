import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';

import App from './components/app';
import TeamData from './containers/team_players';
import Modal from './containers/player_modal';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/teams/:teamId/:playerId" component={Modal} />
        <Route path="/teams/:teamId" component={TeamData} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
