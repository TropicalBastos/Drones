import React, { Component } from 'react';
import mapConfig from '../../config/map';

export default class DroneMap extends Component {

    render() {
      // create an array with marker components
      const LeafletMarkers = markers.map(marker => (
        <Marker position={marker.latlng} key={`marker_${marker.name}`}>
          <Popup>
            <span>{marker.name}</span>
          </Popup>
        </Marker>
      ));
  
      return (
        <div className="map">
          <Map center={mapConfig.center} zoom={mapConfig.zoom} className="map__reactleaflet">
            <TileLayer
              url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
            />
            {LeafletMarkers}
          </Map>
        </div>
      );
    }
  }