import React from 'react';
import ReactDOM from 'react-dom';
import globals from './config/globals';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router'; // react-router v4
import { ConnectedRouter } from 'connected-react-router';
import droneReducer from './reducers/DroneReducer';
import Intro from './Intro/Main';
import DroneSys from './DroneSys/Main';
import DronePilot from './DronePilot/Main';
import './styles/main.scss';

/* Create a browser history so the 
single page application behaves a 
little more like a multi page website
*/
const history = createBrowserHistory();

/** App's initial redux state */
var initialState = {};

const store = createStore(
    connectRouter(history)(droneReducer), // new root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
);

/** Initialise socket service */
globals.socket.start();

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/drone-sys" component={DroneSys} />
            <Route path="/drone-pilot" component={DronePilot} />
            <Route exact path="/*" render={() => {
              return <Redirect to="/" />
            }} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);