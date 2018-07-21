import React, { Component } from 'react';

/**
 * Essentially the gateway menu container
 */
export default class MainContainer extends Component{

    render(){
        return(
        <div className="intro">
            <h1>Welcome to DRONES</h1>
            <p className="subtitle">You are a..</p>
            <div>
                {this.props.children}
            </div>
        </div>
        );
    }

}