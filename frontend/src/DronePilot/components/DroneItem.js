import React from 'react';
import names from '../../config/drones';
import { Link } from 'react-router-dom';

/**
 * Component representing a list item
 */

const DroneItem = (props) => {

    const { location } = props.drone;

    return <li className="drone-item">
                <Link className="drone-link" to={
                    {
                        pathname: "/drone-pilot/cockpit",
                        state: props.drone
                    }
                }>
                    <div>
                        <span>Drone ID: {props.drone.id}</span><br />
                        <span className="name">Drone Name: {props.drone.name}</span><br />
                        <span>Location:</span>
                        <ul>
                            <li className="drone-location">Latitude: {parseFloat(location.lat.toFixed(4))}</li>
                            <li className="drone-location">Longitude: {parseFloat(location.long.toFixed(4))}</li>
                        </ul>
                    </div>
                </Link>
            </li>
}

export default DroneItem;