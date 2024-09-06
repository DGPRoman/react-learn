
let state = {
    profilePage: {
        posts: [
            { id: 1, content: 'Post text 1', likesCount: 12 },
            { id: 2, content: 'Post ds text 2', likesCount: 111 }
        ],
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Roman' },
            { id: 2, name: 'Yurii' },
            { id: 3, name: 'Olga' },
            { id: 4, name: 'USer 22' },
        ],
    
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'MEssage' },
            { id: 3, message: 'lorem dsfdsf' },
        ]
    },
    
    sidebar: {
        friends: [
            {id: 321, name: 'Yurii'},
            {id: 111, name: 'Roman'},
            {id: 1232, name: 'Roman'},
            {id: 122, name: 'Roma'}
        ]
    }
};

export let addPost = (postText) => {
    let newPost = {id: 5, message: postText, likesCount: 0};
    state.profilePage.posts.push(newPost);
}

export default state;
