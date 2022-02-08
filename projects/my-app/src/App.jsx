import './App.css';
import React  from "react";
import Sidebar from "./Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Comments from "./Comments";
import {useSelector} from "react-redux";


function App() {
    const comments = useSelector(state => {
        const { commentsReducer } = state;
        return commentsReducer.comments;
    });

    let arr = comments[];
    let newArr = arr.sort();

    return (
    <BrowserRouter>
        <div className="App">
            <Sidebar />
            <div className='wrap'>
                <div className='sort-block'>
                    <p>Sort by:</p>
                   <div className='sort-types'>
                       <button>Alphabet from A to Y</button>
                       <button>Alphabet from Y to A</button>
                       <button>Number of symbols</button>
                   </div>
                </div>
               <Routes>
                   {/*<Route path='/main_page' element={<MainPage />} />*/}
                   {/*<Route path='/comment' element= {!!comments.length && comments.map(comment => {*/}
                   {/*    return <Comment key={comment.id} data={comment} />*/}
                   {/*})}/>*/}
                   <Route path='/comments' element={<Comments />} />
                   {/*<Route path='/input' element={<InputPage />} />*/}
               </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
