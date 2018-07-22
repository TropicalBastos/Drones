import React, { Component } from 'react';
import CoreDashboard from '../Core/CoreDashboard';
import Dashboard from './containers/Dashboard';

/**
 * Wrapper for the DroneSys module
 */
export default class Main extends Component{

    render(){
        return(
            <CoreDashboard history={this.props.history}>
                <Dashboard />
            </CoreDashboard>
        );
    }

}