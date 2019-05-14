import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';

import Panel from '../Panel';

export default class Dashboard extends Component {
    state = {
        showData: false,
        lat: null,
        lon: null,
        currentPlace: {},
    };

    onEachFeature = (feature, layer) => {
        let that = this;
        layer.on({
            click: function() {
                that.setState({
                    showData: true,
                    lat: feature.geometry.coordinates[0],
                    lon: feature.geometry.coordinates[1],
                    currentPlace: feature.properties,
                });
            },
        });
    };

    render() {
        const position = [64.2008, -149.4937];
        const data = this.props.data.features;
        return (
            <Map
                style={{ height: '100vh', width: '100vw', margin: '0' }}
                center={position}
                zoom={5}>
                <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWJlbnMyNCIsImEiOiJjajJ1bDRtMzcwMDNmMzJydHdvcjF6ODA5In0.xdZi4pmkhj1zb9Krr64CXw" />

                <GeoJSON data={this.props.data} onEachFeature={this.onEachFeature} />
                {this.state.showData && (
                    <Panel
                        lat={this.state.lat}
                        lon={this.state.lon}
                        data={this.state.currentPlace}
                    />
                )}
            </Map>
        );
    }
}
