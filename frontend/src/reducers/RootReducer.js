import React from 'react';
import { combineReducers } from 'redux';
import DroneReducer from './DroneReducer';

/**
 * This is not used by the app as it stands
 * this has only been put in place to future
 * proof the app and separate out the reducers accross
 * multiple domains
 */
export default combineReducers({
    drones: DroneReducer
});