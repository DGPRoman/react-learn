import { profileApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, content: 'Hello, it is a first post!', likesCount: 12 },
        { id: 2, content: 'Second', likesCount: 11 },
        { id: 3, content: 'Third post', likesCount: 1 }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                content: action.text,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return { ...state, status: action.status }
        default:
            return state;
    }
}
export const addPostActionCreator = (text) => ({ type: ADD_POST, text })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileApi.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId);
    console.log(response.data, userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;
