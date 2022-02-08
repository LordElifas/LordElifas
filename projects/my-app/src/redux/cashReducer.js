//
// const initialState = {
//     cash: 0,
//     order: {
//         name: 'palochka',
//         price: 43
//     }
// }
//
// export const cashReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD_CASH":
//             return {...state, cash: state.cash + action.payload}
//
//         case "GET_CASH":
//             return {...state, cash: state.cash - action.payload}
//
//         case "CHANGE_ORDER_NAME":
//             return {...state, name: state.order.name = action.payload}
//
//         case "CHANGE_PRICE":
//             return {...state, price: state.order.price = action.payload}
//
//         case "UPDATE_USER":
//             return {...state, order: state.order = {...state.order, ...action.payload}}
//
//         default:
//             return state
//     }
// }