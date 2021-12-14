import { createStore } from 'redux';
import { optionReducer } from './profile/reducer';

export const store = createStore(
    optionReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);