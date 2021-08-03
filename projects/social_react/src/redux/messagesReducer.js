const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'},
        {id: 7, name: 'This is a list item'},
        {id: 8, name: 'Another list item'},
        {id: 9, name: 'This is a list item'},
        {id: 10, name: 'Yup, another list item'}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I like react"},
        {id: 4, message: "Hello"}
    ],
    newMessageBody: [

    ]
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return  state;

        default:
            return  state;
    }

}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})
export const updateMessageActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE, body: body
})

export default messagesReducer;