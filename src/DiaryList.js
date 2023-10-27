import DiaryItem from "./DiaryItem";

const DiaryList = ( {onEdit, onRemove, diaryList} ) =>{
    return (
    <div className="DiaryList">
        <h2>Diary List</h2>
        <h4>{diaryList.length} diaries present</h4>
        <div>
            {diaryList.map ((it) => (
                <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove}/>
            ))}
        </div>
    </div>
    
    );
}

DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;