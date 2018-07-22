import React from 'react';
import DroneList from '../components/DroneList';

const DroneSelector = (props) => {

    return (
        <div className="drone-pilot">
            <h1>Select your Drone:</h1>
            <DroneList drones={props.drones} />
        </div>
    );

}

export default DroneSelector;