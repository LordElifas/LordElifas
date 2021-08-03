import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";
import friendsListReducer from "./friendsListReducer";

let store = {
    _state: {
            profilePage: {
                posts: [
                    {id: 1, post: "Hey, why nobody love me?", likes: '15'},
                    {id: 2, post: "It's our new program! Hey!", likes: '8'}
                ],
                newPostText: []
            },
            messagesPage: {
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
            },
            friendsPage: {
                friendsList: [
                    {id: 1, name: "Andrew"},
                    {id: 2, name: "Sasha"},
                    {id: 3, name: "Sveta"}
                ]
            },
            sidebarPage: [

            ]

        },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log('state');
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._state.friendsPage = friendsListReducer(this._state.friendsPage, action);

        this.rerenderEntireTree(this._state);
        }

}







window.store = store;

export default store;

