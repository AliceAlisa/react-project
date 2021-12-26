import { auth } from "../../firebase";
import { LOGIN_USER, LOGOUT_USER } from './actions';


export const loginUserAction = (user) => ({
    type: LOGIN_USER,
    payload: user
});

export const logoutUserAction = () => ({
    type: LOGOUT_USER
});

export const initAuthAction = (dispatch) => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            dispatch(loginUserAction(user))
        } else {
            dispatch(logoutUserAction())
        }
    })
}

const initialState = {
    user: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                user: action.payload
            }
        }
        case LOGOUT_USER: {
            return {
                user: null
            }
        }
        default: {
            return state;
        }
    }
}