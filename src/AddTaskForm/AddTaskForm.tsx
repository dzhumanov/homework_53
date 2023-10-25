import React from "react";

interface TaskFormProps {
    onTextEdit: React.ChangeEventHandler<HTMLInputElement>,
    addTask:React.MouseEventHandler,
}

const TaskForm:React.FC<TaskFormProps> = ({
    onTextEdit, addTask
}) => {
    return (
        <div className="form-wrapper">
            <input type="text" placeholder="Add new task" onChange={onTextEdit}/>
            <button type="button" onClick={addTask}>Add</button>
        </div>
    );
};

export default TaskForm;