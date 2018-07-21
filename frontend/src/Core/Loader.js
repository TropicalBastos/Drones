import React, { Component } from 'react';

/**
 * Our loader component
 * this will be inherited by any component that will load
 * asynchronous data so that we can show the users that said data
 * is being loaded
 */
export default class Loader extends Component{

    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }

    /** Cancels the component from loading
     * @return void
     */
    cancel(){
        this.setState({ loading: false });
    }

    /** Renders the loading graphic
     * @return JSX - the loader markup
     */
    renderLoader(){
        return(
            <div className="loader-container">
                <img src="" />
            </div>
        );
    }

    render(){
        return this.renderLoader();
    }

}