import React, { Component } from 'react';
import Leaflet from 'leaflet';
import mapConfig from '../../config/map';
import { Map, Popup, TileLayer, Marker } from  'react-leaflet';
import { DroneIcon } from '../../Core/DroneIcon';

/**
 * Based on React Leaflet maps
 * the drone map renders all the online
 * drones on the screen and where they
 * are on the map based on their latlong geolocation
 */

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/';

export default class DroneMap extends Component {

    render() {
      // create an array with marker components
      const Markers = this.props.drones.map(drone => {
          const { location } = drone;
          return <Marker 
          icon={DroneIcon}
          position={ {lat: location.lat, lng: location.long } } 
          key={`marker_${drone.id}`}>
                    <Popup>
                        <span>Drone ID: {drone.id}</span><br />
                        <span className="name">{drone.name}</span><br />
                        <span>Latitude: {parseFloat(location.lat.toFixed(4))}</span><br />
                        <span>Longitude: {parseFloat(location.long.toFixed(4))}</span><br />
                    </Popup>
                </Marker>
      });
  
      return (
        <div className="map">
          <Map style={{height: '100vh'}} 
          center={mapConfig.center} 
          zoom={mapConfig.zoom} 
          className="map__reactleaflet">
            <TileLayer
              url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
            />
            {Markers}
          </Map>
        </div>
      );
    }
  }