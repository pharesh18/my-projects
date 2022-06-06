import React from 'react';

const PopUpModal = ({ closePopUp, changeRedirect }) => {
    return (
        <div className='main--popup'>
            <div className="popup--container">
                <div className="close--popup">
                    <button onClick={() => closePopUp(false)}>X</button>
                </div>
                <div className="title">
                    <h2>Are you sure you want to continue?</h2>
                </div>
                <div className="body">
                    <p>The next page is awesome, Continue to move forward, You'll enjoy it.</p>
                </div>
                <div className="footer">
                    <button className='red--btn' onClick={() => closePopUp(false)}>Cancel</button>
                    <button className='blue--btn' onClick={() => changeRedirect(true)}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default PopUpModal