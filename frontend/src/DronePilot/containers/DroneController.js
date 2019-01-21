import React, { Component } from 'react';
import DroneMap from '../components/DroneMap';
import { Redirect } from 'react-router';
import Controls from '../components/Controls';
import mapConfig from '../../config/map';
import globals from '../../config/globals';
import events from '../../config/events';

/**
 * Main component holding the business logic
 * for drone geopositioning
 * 
 * Sends a an update via socket to the server ONLY when 
 * the current movement sequence has finished and ONLY if the location differs
 * from the last updated location
 * 
 * Firing signals to the modem has to be rationed so as to 
 * be as efficient and cost effective as possible
 */

export default class DroneController extends Component{

    constructor(props){
        super(props);
        this.lastUpdatedDrone = props.location.state;
        this.moveUp = this.moveUp.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.stopMotion = this.stopMotion.bind(this);
        this.moveUpInterval = this.moveUpInterval.bind(this);
        this.changeZoom = this.changeZoom.bind(this);
        this.compareAndUpdate = this.compareAndUpdate.bind(this);
        this.hasChanged = this.hasChanged.bind(this);
        this.update = this.update.bind(this);
        this.state = {
            drone: props.location.state,
            zoom: mapConfig.pilotZoom
        };
    }

    /**
     * Move controls
     */

    /** MOVEMENT INTERVALS
     * The following four function are the base of the drones movement
     * they dictate the interval that essentially motorises the drones
     * in a single direction
     */
    moveUpInterval(factor){
        var { drone } = this.state;
        drone.location.lat = drone.location.lat + factor;
        this.setState({ drone });
        this.compareAndUpdate();
    }

    moveLeftInterval(factor){
        var { drone } = this.state;
        drone.location.long = drone.location.long - factor;
        this.setState({ drone });
        this.compareAndUpdate();
    }

    moveRightInterval(factor){
        var { drone } = this.state;
        drone.location.long = drone.location.long + factor;
        this.setState({ drone });
        this.compareAndUpdate();
    }

    moveDownInterval(factor){
        var { drone } = this.state;
        drone.location.lat = drone.location.lat - factor;
        this.setState({ drone });
        this.compareAndUpdate();
    }
    /** END OF INTERVALS */

    /** MOVEMENT HANDLERS
     * The following four functions are the evnt handlers that call
     * the movement intervals
     */
    moveUp(e, factor = 0.00001){
        this.interval = setInterval(() => this.moveUpInterval(factor));
    }

    moveLeft(e, factor = 0.00001){
        this.interval = setInterval(() => this.moveLeftInterval(factor));
    }

    moveRight(e, factor = 0.00001){
        this.interval = setInterval(() => this.moveRightInterval(factor));
    }

    moveDown(e, factor = 0.00001){
        this.interval = setInterval(() => this.moveDownInterval(factor));
    }
    /** END OF MOVEMENT HANDLERS */

    /** Stops the interval handle that continuously moves the drone
     * @see compareAndUpdate
     * @return void
     */
    stopMotion(){
        clearInterval(this.interval);
    }
    /**
     * End move controls
     */

     /** Changes the zoom's state
      * @return void
      */
    changeZoom(newZoomLevel){
        this.setState({ zoom: newZoomLevel });
    }

    /** If the drone's location has changed, send the update
     * @return void
     */
    compareAndUpdate(){
        if(this.hasChanged())
            this.update();
    }

    /** Checks wether the location of the drone has changed
     * @return bool
     */
    hasChanged(){
        const { location } = this.state.drone;
        const { lat, long } = this.lastUpdatedDrone;
        const newLat = location.lat, newlong = location.long;
        return (newLat !== lat || newLong !== long);
    }

    /** Sync the drone's location with the server
     *  @return void
     */
    update(){
        const socket = globals.socket.shared;
        socket.emit(events.DRONE_UPDATE, this.state.drone);
    }
    
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
                <DroneMap 
                changeZoom={this.changeZoom}
                zoom={this.state.zoom} 
                drone={this.state.drone} />
                <Controls 
                name={this.state.drone.name}
                moveUp={this.moveUp}
                moveLeft={this.moveLeft} 
                moveRight={this.moveRight} 
                moveDown={this.moveDown}
                stopMotion={this.stopMotion} />
            </div>
        );
    }

}