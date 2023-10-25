import React from "react";

interface TaskProps {
  text: string;
  key: string;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({text, onDelete}) => {
  return (
    <div className="task">
      <p>{text}</p>
      <button type="button" className="delete-btn" onClick={onDelete}>Delete</button>
    </div>
  );
};


export default Task;