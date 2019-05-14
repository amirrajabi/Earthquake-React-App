import React, { Component } from 'react';

import Dashboard from '../Dashboard';

class Data extends Component {
    componentWillMount() {
        this.props.fetchData();
    }

    render() {
        let { data, error, loading } = this.props;
        if (loading == null) {
            loading = true;
        }
        if (error) return <p> {error.message}</p>;
        if (loading) {
            return <span> loading</span>;
        } else {
            return (
                <div>
                    <Dashboard data={data} />
                </div>
            );
        }
    }
}

export default Data;
