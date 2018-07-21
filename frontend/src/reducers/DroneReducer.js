import ActionTypes from '../actions/AppActionsTypes';

export default function droneReducer(state = {}, action){
    switch(action.type){
        case ActionTypes.LOAD_DRONES:
            return Object.assign({}, state, { drones: action.payload });

        default:
            return state;
    }
}