// import React, {useEffect} from "react";
// import {useDispatch, useSelector} from "react-redux";
//
// function InputPage() {
//     const dispatch = useDispatch();
//     // const text = useSelector((state) => state.text.text)
//     //
//     // useEffect(() => {
//     //     console.log(text)
//     // }, [])
//     // const inputText = (text) => {
//     //     dispatch({type:"ADD_TEXT", payload: text})
//     // }
//     // const inputHandler = (val) => {
//     //     console.log(val.target.value)
//     // }
//
//     return (
//         <div className='card-comments'>
//             <form className='comments-item-create' onSubmit={handleSubmit}>
//                 <input type="text" value={textComment} onChange={handleInput}/>
//                 <input type="submit"/>
//             </form>
//
//         </div>
//         // <div className="d-flex flex-wrap">
//         //     <input className="input w-100" type="text" placeholder="Put your information here"
//         //            onChange={(val)=>inputHandler(val)}/>
//         //     <button className="btn-primary w-100" onClick={() => inputText()}>Save information</button>
//         // </div>
//     )
// }
//
// export default InputPage;