import React from "react";

interface TaskFormProps {
    onTextEdit: React.ChangeEventHandler<HTMLInputElement>,
    addTask:React.MouseEventHandler,
    inputValue: string,
}

const TaskForm:React.FC<TaskFormProps> = ({
    onTextEdit, addTask, inputValue
}) => {
    return (
        <div className="form-wrapper">
            <input type="text" placeholder="Add new task" id="name" className="form__input" onChange={onTextEdit} value={inputValue}/>
            <button type="button" onClick={addTask} className="btn">Add</button>
        </div>
    );
};

export default TaskForm;