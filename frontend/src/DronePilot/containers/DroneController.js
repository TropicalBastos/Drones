import React, { Component } from 'react';
import DroneMap from '../components/DroneMap';
import { Redirect } from 'react-router';
import Controls from '../components/Controls';

/**
 * Main component holding the business logic
 * for drone geopositioning
 * 
 * Sends a request to the server every 5 seconds ONLY if the drone
 * location has moved, firing signals to the modem has to be rationed so as to 
 * be efficient and cost effective
 */

export default class DroneController extends Component{

    constructor(props){
        super(props);
        this.moveUp = this.moveUp.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.state = {
            drone: props.location.state
        };
    }

    /**
     * Move controls
     */
    moveUp(e, factor = 0.0025){
        var { drone } = this.state;
        drone.location.lat = drone.location.lat + factor;
        this.setState({ drone });
    }

    moveLeft(e, factor = 0.0025){
        var { drone } = this.state;
        drone.location.long = drone.location.long - factor;
        this.setState({ drone });
    }

    moveRight(e, factor = 0.0025){
        var { drone } = this.state;
        drone.location.long = drone.location.long + factor;
        this.setState({ drone });
    }

    moveDown(e, factor = 0.0025){
        var { drone } = this.state;
        drone.location.lat = drone.location.lat - factor;
        this.setState({ drone });
    }
    /**
     * End move controls
     */

    render(){
        /**
         * If the state hasnt been passed in from a selected drone
         * link then redirect to the drone-pilot dashboard
         */
        if(this.state.drone === undefined){
            return <Redirect to="/drone-pilot" />
        }

        return (
            <div className="drone-pilot controller">
                <h1>Cockpit</h1>
                <DroneMap drone={this.state.drone} />
                <Controls 
                moveUp={this.moveUp}
                moveLeft={this.moveLeft} 
                moveRight={this.moveRight} 
                moveDown={this.moveDown} />
            </div>
        );
    }

}