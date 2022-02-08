const initialState = {
    text: '',
}

export const textReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TEXT":
            return {...state, text: state.text = action.payload}
        default:
            return state
    }
}