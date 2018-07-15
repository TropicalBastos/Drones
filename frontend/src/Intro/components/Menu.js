import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Our main introductory menu, the gateway to the platform :)
 */
export default class Menu extends Component{

    render(){
        return(
        <div>
            <ul>
                <li>
                    <Link to="/drone-pilot">Drone Pilot</Link>
                </li>
                <li>
                    <Link to="/drone-sys">Drone System Administrator</Link>
                </li>
            </ul>
        </div>
        );
    }

}