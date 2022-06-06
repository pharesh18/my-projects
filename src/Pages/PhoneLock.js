import React, { useEffect, useState } from 'react'
import LockIcon from '@material-ui/icons/Lock';
import CloseIcon from '@material-ui/icons/Close';
import '../Styles/PhoneLock.css';
import { useNavigate } from 'react-router-dom';

const PhoneLock = () => {
    const [lock, setLock] = useState("");
    const navigate = useNavigate();

    const handleClick = (val) => {
        if (lock.length !== 4) {
            setLock(lock + val);
        }
    }

    const handleCancel = () => {
        var newLock = lock.slice(0, -1)
        setLock(newLock);
    }

    useEffect(() => {
        var circles = document.querySelectorAll('#circle');
        // var len = circles.length;
        for (var i = 0; i < circles.length; i++) {
            if (i < lock.length) {
                circles[i].style.backgroundColor = "#fff";
            } else {
                circles[i].style.backgroundColor = "rgb(182, 169, 169)";
            }
        }

        if (lock === '1234') {
            navigate('/redirect');
        }

    }, [lock])

    return (
        <div className='main-container'>
            <div className="lock-container">
                <LockIcon className='lock'></LockIcon>
            </div>
            <div className="msg">
                <p>Enter your PIN</p>
            </div>
            <div className="process">
                <span id='circle' className='circle'></span>
                <span id='circle' className='circle'></span>
                <span id='circle' className='circle'></span>
                <span id='circle' className='circle'></span>
            </div>
            <div className="btns">
                <button className='btn' onClick={() => handleClick(1)}>1</button>
                <button className='btn' onClick={() => handleClick(2)}>2</button>
                <button className='btn' onClick={() => handleClick(3)}>3</button>
                <button className='btn' onClick={() => handleClick(4)}>4</button>
                <button className='btn' onClick={() => handleClick(5)}>5</button>
                <button className='btn' onClick={() => handleClick(6)}>6</button>
                <button className='btn' onClick={() => handleClick(7)}>7</button>
                <button className='btn' onClick={() => handleClick(8)}>8</button>
                <button className='btn' onClick={() => handleClick(9)}>9</button>
                <button className='btn' style={{ "cursor": "default" }}></button>
                <button className='btn' onClick={() => handleClick(0)}>0</button>
                <button className='btn' onClick={handleCancel}>⌫</button>
            </div>
            <div className="footer--buttons">
                <button className='btn'>▢</button>
                <button className='btn'>◉</button>
                <button className='btn'>⛛</button>
            </div>
        </div>
    )
}

export default PhoneLock