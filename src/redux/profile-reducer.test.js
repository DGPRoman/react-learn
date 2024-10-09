import profileReducer, { addPostActionCreator } from "./profile-reducer";

test('lenght post should be incr.', () => {
    // 1. data
    let action = addPostActionCreator('test text');
    let state = {
        posts: [
            { id: 1, content: 'Hello, it is a first post!', likesCount: 12 },
            { id: 2, content: 'Second', likesCount: 11 },
            { id: 3, content: 'Third post', likesCount: 1 }
        ]
    };
    // 2.action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});
