import React, { Component } from 'react';

/**
 * The back component is a simple element that 
 * rewinds to the previous point in history 
 * on the react router stack
 */
export default class Back extends Component{

    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    /** Goes back to previous point in stack
     * @return void
     */
    goBack(){
        this.props.history.goBack();
    }

    render(){
        return <button onClick={this.goBack} className="back-btn">Back</button>
    }

}