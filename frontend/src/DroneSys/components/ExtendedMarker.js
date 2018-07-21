import React from 'react';
import Leaflet from 'leaflet';
import { Marker } from 'react-leaflet';

/**
 * Extension of React Leaflet's market class
 * this is to override the popup so as to always leave it open
 */

// export default class ExtendedMarker extends Marker {

//     constructor(props){
//         super(props);
//     }

//     componentDidMount() {
//         // Call the Marker class componentDidMount (to make sure everything behaves as normal)
//         super.componentDidMount();

//         // Access the marker element and open the popup.
//         this.leafletElement.openPopup();
//     }
// }