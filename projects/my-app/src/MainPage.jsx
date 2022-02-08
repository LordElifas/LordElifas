import React from "react";
import {useDispatch, useSelector} from "react-redux";

function MainPage(props) {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const price = useSelector(state => state.cash.order.price)
    const name = useSelector(state => state.cash.order.name)
    const addCash = (cash) => {
        dispatch({type:"ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type:"GET_CASH", payload: cash})
    }

    const changeName = (name) => {
        dispatch({type:"CHANGE_ORDER_NAME", payload: name})
    }

    const changePrice = (price) => {
        dispatch({type:"CHANGE_PRICE", payload: {name: 'sadasd'}})
    }
    const updateUser = () => {
        dispatch({type:"UPDATE_USER", payload: {name:"asdsa"}})
    }

    return(
        <div >
            <div style={{display:"flex", marginBottom:20, marginTop:30, justifyContent:"space-between", marginLeft:50, marginRight:50}}>
                <div>{cash}</div>
                <div>{name}</div>
                <div>{price}</div>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <button onClick={() => addCash(Number(prompt()))} style={{marginRight:20}}>Add cash</button>
                <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <button onClick={() => changeName(prompt())} style={{marginRight:20}}>change name</button>
                <button onClick={() => changePrice(Number(prompt()))} >change price</button>
            </div>
            <button onClick={() => updateUser()}>update user</button>
        </div>
    )
}

export default MainPage;