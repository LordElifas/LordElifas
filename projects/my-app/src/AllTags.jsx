import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function AllTags(props) {
    const [value, setValue] = useState();
    const dispatch = useDispatch();
    const input = useSelector( (state) => state.text.text)
    useEffect(() => {
        console.log(input)
    }, [])

    const changeCash = (text) => {
        dispatch({type:"ADD_CASH", payload: text})
    }
    return (
        <div>
        <button onClick={ () => changeCash()}>button</button>
            {value}
        </div>
    )

}
export default AllTags;