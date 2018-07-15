import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';
import Menu from './components/Menu';

/**
 * Wraps the container and menu component into
 * a singular element
 */
export default class Main extends Component{

    render(){
        return(
            <MainContainer>
                <Menu />
            </MainContainer>
        );
    }

}