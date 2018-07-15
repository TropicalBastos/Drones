import React, { Component } from 'react';

/**
 * Essentially the gateway menu container
 */
export default class MainContainer extends Component{

    render(){
        return(
        <div className="intro">
            <h2>Welcome to DRONES</h2>
            <p>You are a..</p>
            <div>
                {this.props.children}
            </div>
        </div>
        );
    }

}