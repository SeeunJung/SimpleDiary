import React, { memo, useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {

    const {onCreate} = useContext(DiaryDispatchContext);
    const [state, setState] = useState({
        author:"",
        content:"",
        emotion: 1,
    });

const handleChangeState = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    });
};

const authorInput = useRef();
const contentInput = useRef();

const handleSubmit = () => {
    if(state.author.length<3){
        authorInput.current.focus();
        return;
    }
    if(state.content.length<5){
        contentInput.current.focus();
        return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("Successfully Saved");
    setState({
        author: "",
        content: "",
        emotion: 1,
    });
};

    return <div className="DiaryEditor">
        <h2>Today's Diary</h2>
        <div>
            <input ref={authorInput} value={state.author} onChange={handleChangeState} name="author" placeholder="Author" type="text" />
        </div>
        <div>
            <textarea ref={contentInput} value={state.content} onChange={handleChangeState} name="content" placeholder="Diary" type="text"/>
        </div>
        <div>
            <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>Save</button>
        </div>
    </div>
}

export default memo(DiaryEditor);