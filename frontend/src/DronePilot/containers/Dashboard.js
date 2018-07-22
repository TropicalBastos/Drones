import React from 'react';
import DroneSelector from './DroneSelector';
import DroneController from './DroneController';
import { Route, Switch } from 'react-router';

/**
 * The drone pilot dashboard will
 * route the frontend to the designated area
 * be that the controller panel or the drone selector
 * 
 * A user will only go to the controller panel after selecting a drone
 */

const Dashboard = (props) => {

    return (
        <div>
            <Switch>
                <Route exact path="/drone-pilot" render={() => {
                    return <DroneSelector drones={props.drones} />
                }} />
                <Route exact path="/drone-pilot/cockpit" component={DroneController} />
            </Switch>
        </div>
    );

}

export default Dashboard;