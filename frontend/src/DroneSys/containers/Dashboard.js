import React, { Component } from 'react';
import Loader from '../../Core/Loader';
import DroneMap from '../components/DroneMap';
import axios from 'axios';
import routesConfig from '../../config/routes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/AppActions';
import Back from '../../Core/Back';

/**
 * Sysadmin dashboard
 * Not much of a dashboard,
 * perhaps more of an observatory
 * 
 * inherits the core loader component which means it will naturally
 * initialise and present a loading interface to the user
 * before all data is loaded
 */
class Dashboard extends Loader{

    /**
     * Load the drones into the redux store
     */
    componentDidMount(){
        axios.get(routesConfig.GET_DRONES).then((response) => {
            this.props.actions.loadDrones(response.data);
            this.cancel(1000);
        }).catch((reason) => {
            //this.showError(reason);
        });
    }

    render(){
        if(this.state.loading){
            return this.renderLoader();
        }

        return(
            <div className="dashboard">
                <h1>Drones Online: {this.props.drones.length}</h1>
                <DroneMap drones={this.props.drones} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);