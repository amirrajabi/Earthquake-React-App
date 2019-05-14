import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/actionTypes';

export const fetchDataStart = () => {
    return {
        type: FETCH_DATA_START,
    };
};

export const fetchDataSuccess = data => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data,
    };
};

export const fetchDataFailure = error => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error,
    };
};

//helper function to add script tag to body with uri as source
function jsonP(uri) {
    return new Promise(resolve => {
        let object = {};
        global.eqfeed_callback = function(data) {
            object = data;
        };
        var tag = document.createElement('script');
        tag.src = uri;
        tag.async = true;
        tag.onload = () => {
            resolve(object);
        };
        document.getElementsByTagName('body')[0].appendChild(tag);
    });
}

//thunk used to fetch data (function that returns a function)
export function fetchData() {
    return dispatch => {
        dispatch(fetchDataStart());
        return jsonP('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp')
            .then(data => {
                dispatch(fetchDataSuccess(data));
            })
            .catch(error => {
                dispatch(fetchDataFailure(error));
            });
    };
}
