import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { Provider as provider } from 'react-redux';

/**
 * Configure adapter
 */
import ReactAdapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';
enzyme.configure({ adapter: new ReactAdapter() });
export const Enzyme = enzyme;

/** 
 * Set up boilerplate redux router
 * uses ES6
 */
function reducer(state = {}, action){
    return state;
}

export const History = createBrowserHistory();

/**
 * Mock redux store
 */
var initialState = {
    drones: [
        {
            id: 0,
            name: "Seeker",
            location: {
                lat: 52.8405,
                long: 0.7027
            }
        },

        {
            id: 1,
            name: "Jinx",
            location: {
                lat: 51.5074,
                long: 0.1278
            }
        },

        {
            id: 2,
            name: "The Interceptor",
            location: {
                lat: 52.0406,
                long: 0.7594
            }
        },

        {
            id: 3,
            name: "Sir Robert",
            location: {
                lat: 51.6369,
                long: -2.1398
            }
        },
    ]
};

export const drones = initialState.drones;

export const Store = createStore(
    connectRouter(history)(reducer), // new root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(History), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
);

export var Provider = provider;