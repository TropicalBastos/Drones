import React, { Component } from 'react';
import Dashboard from './containers/Dashboard';

/**
 * Wrapper for the DroneSys module
 */
export default class Main extends Component{

    render(){
        return(
            <Dashboard history={this.props.history} />
        );
    }

}