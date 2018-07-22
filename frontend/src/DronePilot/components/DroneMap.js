import React, { Component } from 'react';
import Leaflet from 'leaflet';
import mapConfig from '../../config/map';
import { Map, Popup, TileLayer, Marker } from  'react-leaflet';

/**
 * Based on React Leaflet maps
 * the drone map renders a single drone
 * which is to be controlled by the pilot
 */

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/';

export default class DroneMap extends Component {

    render() {

        const { drone } = this.props;
        const { location } = drone;
        const latlng = { lat: location.lat, lng: location.long };

        return (
            <div className="map">
                <Map style={{height: 'calc(100vh - 100px)'}} 
                center={latlng} 
                onZoom={(e) => { this.props.changeZoom(e.target.zoom); }}
                zoom={this.props.zoom} 
                className="map__reactleaflet">
                    <TileLayer
                    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                    />
                    <Marker position={ latlng }>
                        <Popup>
                            <span>Drone ID: {drone.id}</span><br />
                            <span>Latitude: {location.lat}</span><br />
                            <span>Longitude: {location.long}</span><br />
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
  }