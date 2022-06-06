import React, { useEffect, useState } from 'react'
// import ShowToDoList from '../Components/ShowToDoList';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import AutorenewRoundedIcon from '@material-ui/icons/AutorenewRounded';
import '../Styles/ShowToDoList.css';

const ToDoApp = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [update, setUpdate] = useState(false);
    const [currentId, setCurrentId] = useState("");

    const handleAddTask = () => {
        if (task) {
            const newTask = { id: new Date().getTime().toString(), title: task }
            setTasks([...tasks, newTask]);
            localStorage.setItem("ToDoData", JSON.stringify([...tasks, newTask]));
            setTask("");
        }
    }

    const handleRemove = (id) => {
        const filteredData = tasks.filter((task) => id !== task.id);
        setTasks(filteredData);
        localStorage.setItem("ToDoData", JSON.stringify(filteredData));
    }

    const handleUpdate = (id, title) => {
        setTask(title);
        setCurrentId(id);
        setUpdate(true);
        // console.log(updatedData);
    }

    const handleUpdateTask = () => {
        if (currentId && task) {
            const updatedData = tasks.filter((currTask) => {
                if (currTask.id === currentId) {
                    currTask.title = task;
                    return currTask;
                } else {
                    return currTask;
                }
            })
            setTasks(updatedData);
            localStorage.setItem("ToDoData", JSON.stringify(updatedData));
            setUpdate(false);
            setTask("")
        } else {
            console.log("current id or title is null");
        }
    }

    const handleClear = () => {
        if (window.confirm("Are you sure you want to clear all")) {
            localStorage.removeItem("ToDoData");
            setTasks([]);
        }
    }

    useEffect(() => {
        if (localStorage.getItem("ToDoData")) {
            const data = JSON.parse(localStorage.getItem("ToDoData"));
            setTasks(data);
        }
    }, [])

    return (
        <div className="todo">
            <h1>To Do App</h1>
            <div className="header">
                <div className='searchBar'>
                    <input type="text" placeholder='Add your task' value={task} onChange={(e) => setTask(e.target.value)} />
                    {
                        update ? (
                            <h1 onClick={handleUpdateTask}>✓</h1>
                        ) : (
                            <h1 onClick={handleAddTask}>+</h1>
                        )
                    }

                </div>
                {
                    (tasks.length > 0) ? (
                        <div id='cleared' className="clear">
                            <button onClick={handleClear}>Clear All</button>
                        </div>
                    ) : (
                        <></>
                    )
                }

            </div>
            {/* <ShowToDoList data={tasks} /> */}
            <div className="listContainer">
                {tasks?.map(({ id, title }) => {
                    return (
                        <div key={id} className="container">
                            <p>{title}</p>
                            <div className="footer">
                                <AutorenewRoundedIcon className='update' onClick={() => handleUpdate(id, title)} />
                                <DeleteRoundedIcon className='delete' onClick={() => handleRemove(id)} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ToDoApp