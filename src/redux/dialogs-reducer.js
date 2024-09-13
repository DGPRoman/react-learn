const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}]
            }
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer;
