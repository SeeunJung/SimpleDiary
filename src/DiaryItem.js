import React, { memo, useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({id, author, content, emotion, created_date}) => {

const {onRemove, onEdit} = useContext(DiaryDispatchContext);
const [isEdit, setIsEdit] = useState(false);
const toggleIsEdit = () => setIsEdit(!isEdit);

const [localContent, setLocalContent] = useState(content);

const localContentInput = useRef();

    const handleRemove = () => {
    if(window.confirm(`Delete diary number ${id}?`)){
        onRemove(id);
    }
};

const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
}

const handleEdit = () => {
    if(localContent.length <5 ){
        localContentInput.current.focus();
        return;
    }
    if(window.confirm(`Modify diary number ${id}?`)){
        onEdit(id,localContent);
        toggleIsEdit();
    }
    onEdit(id, localContent);
}

return <div className="DiaryItem">
        <div className="info">
            <span>
                Author: {author} | Emotion: {emotion}
            </span>
            <br />
            <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">
            {isEdit ? 
            (<>
                <textarea ref={localContentInput}
                value={localContent}
                onChange = {(e) => setLocalContent(e.target.value)}/>
            </>)
            :(content)}    
        </div>
        {isEdit? 
        (<>
            <button onClick={handleQuitEdit}>Cancel</button>
            <button onClick={handleEdit}>Confirm</button>
        </>)
        :(<>
            <button onClick={handleRemove}>Delete</button>
            <button onClick={toggleIsEdit}>Modify</button>
        </>)}
        
    </div>
};

export default memo(DiaryItem);