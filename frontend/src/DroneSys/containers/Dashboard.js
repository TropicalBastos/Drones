import React, { Component } from 'react';
import Loader from '../../Loader/Loader';

/**
 * Sysadmin dashboard
 * Not much of a dashboard,
 * perhaps more of an observatory
 * 
 * inherits loader component which means it will naturally
 * initialise and present a loading interface to the user
 * before all data is loaded
 */
export default class Dashboard extends Loader{

    render(){
        if(this.state.loading){
            return this.renderLoader();
        }

        return(
            <div className="dashboard">
                <h1>TODO...</h1>
            </div>
        );
    }

}