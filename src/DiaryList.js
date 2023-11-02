import { useContext } from "react";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "./App";

const DiaryList = () =>{
    const diaryList = useContext(DiaryStateContext);
    return (
    <div className="DiaryList">
        <h2>Diary List</h2>
        <h4>Number of diary present: {diaryList.length}</h4>
        <div>
            {diaryList.map ((it) => (
                <DiaryItem key={it.id} {...it} />
            ))}
        </div>
    </div>
    
    );
}

DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;