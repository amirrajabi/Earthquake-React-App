import React, { Component } from 'react';

import './style.css';

class Panel extends Component {
    handleTime(dateTime) {
        let today = new Date(dateTime);
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        return date + ' ' + time;
    }

    render() {
        return (
            <section className="panel">
                <h1>
                    Earthquake
                    <br /> Panel
                </h1>
                <div className="info">
                    <h2>{this.props.data.place}</h2>
                    <p>
                        <strong>Date / Time: </strong>
                        {this.handleTime(this.props.data.time)}
                    </p>
                    <p>
                        <strong>Latitude & Longitude: </strong>
                        {`${this.props.lat} | ${this.props.lon}`}
                    </p>
                    <p>
                        <strong>Depth: </strong>
                        {this.props.data.tz}
                    </p>
                    <p>
                        <strong>Tsunami: </strong>
                        {this.props.data.tsunami}
                    </p>
                    <p>
                        <strong>Magnitude: </strong>
                        {this.props.data.mag}
                    </p>
                </div>
            </section>
        );
    }
}

export default Panel;
