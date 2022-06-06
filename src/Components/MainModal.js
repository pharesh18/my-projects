import React, { useState } from 'react';
import PopUpModal from './PopUpModal';
import './PopUpModelStyle.css';
import Redirect from './Redirect';

const MainModal = () => {
    const [popUpModal, setPopUpModal] = useState(false);
    const [redirect, setRedirect] = useState(false);
    return (
        <>
            <div className="main--modal">
                <div className="main--title">
                    <h2>Hey, Click on the button to open the modal.</h2>
                    <button className='blue--btn' onClick={() => setPopUpModal(true)}>Open</button>
                </div>
            </div>
            {popUpModal && <PopUpModal closePopUp={setPopUpModal} changeRedirect={setRedirect} />}
            {redirect && <Redirect />}
        </>
    )
}

export default MainModal