import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                initialized: true
            }
        default:
            return state;
    }
}

const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
    let propmise = dispatch(getAuthUserData());

    Promise.all([propmise]).then(() => {
        dispatch(initializedSuccess());
    });
};

export default appReducer;
