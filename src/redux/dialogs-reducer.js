const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Yurii' },
        { id: 2, name: 'Roman' },
        { id: 3, name: 'Oksana' },
        { id: 4, name: 'Olga' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'HElllllllooo' },
        { id: 3, message: 'lorem' },
        { id: 4, message: '?' },
        { id: 5, message: '??!!' }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            }
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})
export default dialogsReducer;
