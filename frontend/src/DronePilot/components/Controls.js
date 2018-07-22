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
                        <img 
                        draggable={false}
                        onMouseOut={this.props.stopMotion} 
                        onMouseUp={this.props.stopMotion} 
                        onMouseDown={this.props.moveUp} 
                        src="/res/up-arrow.png" />
                    </div>
                    <div className="double left">
                        <img 
                        draggable={false}
                        onMouseDown={this.props.moveLeft}
                        onMouseOut={this.props.stopMotion} 
                        onMouseUp={this.props.stopMotion} 
                        src="/res/left-arrow.png" />
                    </div>
                    <div className="double right">
                        <img 
                        draggable={false}
                        onMouseDown={this.props.moveRight} 
                        onMouseOut={this.props.stopMotion} 
                        onMouseUp={this.props.stopMotion} 
                        src="/res/right-arrow.png" />
                    </div>
                    <div className="clearfix"></div>
                    <div className="single down">
                        <img 
                        draggable={false}
                        onMouseDown={this.props.moveDown} 
                        onMouseOut={this.props.stopMotion} 
                        onMouseUp={this.props.stopMotion} 
                        src="/res/down-arrow.png" />
                    </div>
                </div>
                <div className="drone-name">
                    <p>You are controlling:</p>
                    <h1>{this.props.name}</h1>
                </div>
            </div>
        )
    }

}