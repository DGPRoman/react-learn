import { usersApi } from "../api/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(
                    u => {
                        if (u.id === action.userId) {
                            return { ...u, followed: true }
                        }
                        return u;
                    })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(
                    u => {
                        if (u.id === action.userId) {
                            return { ...u, followed: false }
                        }
                        return u;
                    })
            };

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalCount }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        
        case TOGGLE_FOLLOW_IN_PROGRESS:
            return { ...state,
                 followInProgress: action.isFetching ? 
                 [...state.followInProgress, action.userId] :
                 state.followInProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId});

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        usersApi.getUsers(page, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(toggleIsFetching(false));
            dispatch(toggleFollowInProgress(true, 31668));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgress(true, userId));
        usersApi.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowInProgress(false, userId));
        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgress(true, userId));
        usersApi.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowInProgress(false, userId));
        });
    }
}

export default usersReducer;
