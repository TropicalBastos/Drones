import React, { Component } from 'react';
import Loader from '../../Core/Loader';
import DroneMap from '../components/DroneMap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/AppActions';
import Back from '../../Core/Back';
import DroneHttp from '../../Core/helpers/DroneHttp';

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
        DroneHttp.getDrones().then((drones) => {
            this.props.actions.loadDrones(drones);
            this.cancel(1000);
        }).catch((reason) => {
            //this.showError(reason);
        })
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