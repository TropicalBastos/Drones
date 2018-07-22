import React, { Component } from 'react';
import DroneItem from './DroneItem';

/**
 *  List of drones to choose from 
 */

export default class DroneList extends Component {

    render() {
        const Drones = this.props.drones.map(drone => {
            return <DroneItem drone={drone}  key={drone.id} />
        });

        return (
            <ul>
                {Drones}
            </ul>
        );
    }

}