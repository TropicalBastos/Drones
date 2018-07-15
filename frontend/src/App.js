import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4
import { ConnectedRouter } from 'connected-react-router';
import rootReducer from './reducers/RootReducer';
import Intro from './Intro/Main';
import DroneSys from './DroneSys/Main';
import './styles/main.scss';

/* Create a browser history so the 
single page application behaves a 
little more like a multi page website
*/
const history = createBrowserHistory();

/** App's initial redux state */
var initialState = {};

const store = createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
);

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/drone-sys" component={DroneSys} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);