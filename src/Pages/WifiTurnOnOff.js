import React, { useState } from 'react'
import '../Styles/WifiTurnOnOff.css';

const WifiTurnOnOff = () => {
    const [state, setState] = useState(false);
    const handleTurnOnOff = () => {
        if (!state) {
            const wifi = document.getElementById('wifi');
            const child = document.getElementById('child');
            wifi.style.border = "1px solid blue";
            wifi.style.transition = "0.5s";
            child.style.backgroundColor = "blue";
            child.style.left = "30px";
            setState(!state);
        } else {
            const wifi = document.getElementById('wifi');
            const child = document.getElementById('child');
            wifi.style.border = "";
            wifi.style.transition = "";
            child.style.backgroundColor = "";
            child.style.left = "";
            setState(!state);
        }
    }
    return (
        <div className='main-wifi-container'>
            <div className="header">
                <p>Turn {state ? 'off' : 'on'}  the Wifi</p>
                <div id='wifi' className="wifi" onClick={handleTurnOnOff}>
                    <p id='child'></p>
                </div>
            </div>
            <div className="center">
                <div className="title">
                    <h2>Hello Haresh</h2>
                </div>
                <div className="btns">
                    <button className='btn'>1</button>
                    <button className='btn'>2</button>
                    <button className='btn'>3</button>
                    <button className='btn'>4</button>
                    <button className='btn'>5</button>
                    <button className='btn'>6</button>
                    <button className='btn'>7</button>
                    <button className='btn'>8</button>
                    <button className='btn'>9</button>
                    <button className='btn'>.</button>
                    <button className='btn'>0</button>
                    <button className='btn'>X</button>
                </div>
            </div>

        </div>
    )
}

export default WifiTurnOnOff