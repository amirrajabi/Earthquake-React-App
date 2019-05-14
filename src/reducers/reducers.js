import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/actionTypes';

const INITIAL_STATE = {
    data: [],
    error: null,
    loading: false,
};

const dataReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                data: [],
                error: null,
                loading: true,
            };

        case FETCH_DATA_SUCCESS:
            return {
                data: action.payload,
                error: null,
                loading: false,
            };

        case FETCH_DATA_FAILURE:
            return {
                data: [],
                error: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default dataReducers;
