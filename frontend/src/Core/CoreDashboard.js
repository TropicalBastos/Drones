import React from 'react';
import Loader from './Loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/AppActions';
import DroneHttp from './helpers/DroneHttp';

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

        const { children } = this.props;
        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { drones: this.props.drones }
        ));

        return(
            <div className="dashboard">
                {childrenWithProps}
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