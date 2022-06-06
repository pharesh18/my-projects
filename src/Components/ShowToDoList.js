import React, { useEffect, useState } from 'react'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import AutorenewRoundedIcon from '@material-ui/icons/AutorenewRounded';
import '../Styles/ShowToDoList.css';

const ShowToDoList = ({ data, clear }) => {
    const [tasks, setTasks] = useState([]);

    const handleRemove = (id) => {
        const filteredData = tasks.filter((task) => id !== task.id);
        setTasks(filteredData);
        localStorage.setItem("ToDoData", JSON.stringify(filteredData));
    }

    useEffect(() => {
        if (data) {
            setTasks(data);
            console.log(data);
        }
    }, [data])


    return (
        <div className="listContainer">
            {tasks?.map(({ id, title }) => {
                return (
                    <div key={id} className="container">
                        <p>{title}</p>
                        <div className="footer">
                            <AutorenewRoundedIcon className='update' />
                            <DeleteRoundedIcon className='delete' onClick={() => handleRemove(id)} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ShowToDoList