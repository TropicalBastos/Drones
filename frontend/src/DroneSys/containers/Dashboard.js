import React, { Component } from 'react';
import DroneMap from '../components/DroneMap';
import Back from '../../Core/Back';
import DroneHttp from '../../Core/helpers/DroneHttp';

/**
 * Sysadmin dashboard
 * Not much of a dashboard,
 * perhaps more of an observatory
 * 
 */
const Dashboard = (props) => {

    return(
        <div>
            <h1>Drones Online: {props.drones.length}</h1>
            <DroneMap drones={props.drones} />
            <Back history={props.history} />
        </div>
    );

}

export default Dashboard;