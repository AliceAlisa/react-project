import { CHANGE_OPTION } from './actions';

const initialState = {
    someOption: false,
}

export const optionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_OPTION: {
            return {
                ...state,
                someOption: !state.someOption,
            }
        }

        default: {
            return state;
        }
    }
}