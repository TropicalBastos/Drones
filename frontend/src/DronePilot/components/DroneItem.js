import React from 'react';

const DroneItem = (props) => {

    const { location } = props.drone;

    return <li>
        <span>Drone ID: {props.drone.id}</span><br />
        <span>Drone Name: {props.drone.name}</span><br />
        <span>Location:</span>
        <ul>
            <li>Latitude: {location.lat}</li>
            <li>Longitude: {location.long}</li>
        </ul>
    </li>
}

export default DroneItem;