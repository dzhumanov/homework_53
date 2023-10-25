interface Task {
    text: string;
    key: string;
}

const Task = (props: Task) => {
    return (
        <div className="task">
            <p>{props.text}</p>
            <button type="button" className="delete-btn"></button>
        </div>
    );
};

export default Task;