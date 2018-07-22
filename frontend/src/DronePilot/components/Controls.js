import React, { Component } from 'react';

/**
 * Visual controls Component
 * calls event handlers from its nodal parent
 */

export default class Controls extends Component{

    render(){
        return(
            <div className="controls-wrapper">
                <div className="controls">
                    <div className="single up">
                        <img onClick={this.props.moveUp} src="/res/up-arrow.png" />
                    </div>
                    <div className="double left">
                        <img onClick={this.props.moveLeft} src="/res/left-arrow.png" />
                    </div>
                    <div className="double right">
                        <img onClick={this.props.moveRight} src="/res/right-arrow.png" />
                    </div>
                    <div className="clearfix"></div>
                    <div className="single down">
                        <img onClick={this.props.moveDown} src="/res/down-arrow.png" />
                    </div>
                </div>
            </div>
        )
    }

}