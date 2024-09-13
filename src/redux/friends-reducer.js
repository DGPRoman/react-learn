const UPDATE_FRIENDS = 'UPDATE-FRIENDS_ACTION';

let initialState = 
    [
        {id: 1, name: 'Yurii', ava: ''}
    ]
;

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_FRIENDS:
            return {
                ...state,
                friendsData: [...state.friendsData]
            };
        default:
            return state;
    }
}

export default friendsReducer;
