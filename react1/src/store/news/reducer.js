import { SET_LOADING, SET_ERROR, SET_DATA } from './actions';

const initialState = {
    isLoading: false,
    isError: false,
    data: []
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING: {
            return { ...state, isLoading: action.payload }
        }
        case SET_ERROR: {
            return { ...state, isError: action.payload }
        }
        case SET_DATA: {
            return { ...state, data: action.payload }
        }
        default: {
            return state;
        }
    }
};