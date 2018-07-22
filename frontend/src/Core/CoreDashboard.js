import React from 'react';
import Loader from './Loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/AppActions';
import DroneHttp from './helpers/DroneHttp';
import Back from './Back';
import events from '../config/events';
import globals from '../config/globals';

/**
 * Core dashboard
 * 
 * inherits the core loader component which means it will naturally
 * initialise and present a loading interface to the user
 * before all data is loaded
 * 
 * Loads drone data on mount, suits the DroneSys and DronePilot modules
 */
class CoreDashboard extends Loader{

    constructor(props){
        super(props);
        this.setupSocket = this.setupSocket.bind(this);
    }

    /**
     * Load the drones into the redux store
     */
    componentDidMount(){
        if(this.props.env && this.props.env === 'test'){
            this.cancel();
            return;
        }
        
        this.setupSocket();
        DroneHttp.getDrones().then((drones) => {
            this.props.actions.loadDrones(drones);
            this.cancel(1000);
        }).catch((reason) => {
            //this.showError(reason);
        });
    }

    /**
     * Sets up the base socket listener
     * Any changes to drone location will
     * be emitted by the server and update the redux store accordingly
     */
    setupSocket(){
        const socket = globals.socket.shared;
        socket.on(events.DATA_UPDATED, (data) => {
            this.props.actions.loadDrones(data);
        });
    }

    render(){
        if(this.state.loading){
            return this.renderLoader();
        }

        const { children } = this.props;
        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { drones: this.props.drones }
        ));

        return(
            <div className="dashboard">
                {childrenWithProps}
                <Back history={this.props.history} />
            </div>
        );
    }

}

const mapStateToProps = (state, props) => {
    return {
        drones: state.drones
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actions: bindActionCreators(Actions, dispatch) 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoreDashboard);