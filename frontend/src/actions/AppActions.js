import ActionTypes from './AppActionsTypes';

/** All app actions
 * 
 * Given the small scale of the app 
 * the action creators are all contained within this file
 */

export const loadDrones = (drones) => {
    return {
        type: ActionTypes.LOAD_DRONES,
        payload: drones
    };
}