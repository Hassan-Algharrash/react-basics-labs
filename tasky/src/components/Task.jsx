const Task = (props) => {
    return (
        <div className="card" style={{
            backgroundColor: 
            props.done ? 'lightgrey' : '#5bb4c4'
            }}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority" style={{
                backgroundColor:
                props.done ? "lightgray" :
                props.priority === 'high' ? '#FF0000':
            props.priority === 'medium' ? '#FFEA00':
            props.priority === 'low' ? '#00FF00': 'lavender'
            }}>{props.priority} </p>
            <button onClick={props.markDone}className="doneButton">Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>

        </div>
    )
};

export default Task;
