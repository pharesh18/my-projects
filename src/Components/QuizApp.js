import React, { useState } from 'react';
import './QuizAppStyle.css';
import data from '../data/quiz.json';

const QuizApp = () => {
    const [que, setQue] = useState(1);
    const [showResponse, setShowResponse] = useState(false);

    const handleSelect = (e) => {
        var response = document.getElementById("response");
        if (e.target.value.toUpperCase() == data[que - 1].answer.toUpperCase()) {
            response.style.display = 'none';
        } else {
            setShowResponse(true);
            response.style.display = 'flex';
        }
    }

    const handlePrevious = () => {
        var response = document.getElementById("response");
        response.style.display = 'none';
        if (que == 1) {

        } else {
            setQue(que - 1);
        }
    }

    const handleNext = (e) => {
        var response = document.getElementById("response");
        response.style.display = 'none';

        var radio = document.querySelector('input[type=radio]');
        radio.checked = false;
        if (que == 5) {

        } else {
            setQue(que + 1);
        }
    }

    return (
        <div className='main--container'>
            <div className="quiz--container">
                <div className="header">
                    <h2>Quiz App</h2>
                </div>
                <div className="question">
                    <span>{que}. </span><p>{data[que - 1].question}</p>
                </div>
                <form action="">
                    <div className="options">
                        <div className='option'>
                            A. <input type="radio" name='question' value={data[que - 1].option1} onChange={handleSelect} /><label htmlFor=""> {data[que - 1].option1}</label>
                        </div>
                        <div className='option'>
                            B. <input type="radio" name='question' value={data[que - 1].option2} onChange={handleSelect} /><label htmlFor=""> {data[que - 1].option2}</label>
                        </div>
                        <div className='option'>
                            C. <input type="radio" name='question' value={data[que - 1].option3} onChange={handleSelect} /><label htmlFor=""> {data[que - 1].option3}</label>
                        </div>
                        <div className='option'>
                            D. <input type="radio" name='question' value={data[que - 1].option4} onChange={handleSelect} /><label htmlFor=""> {data[que - 1].option4}</label>
                        </div>
                    </div>
                </form>
                <div className="response" id='response'>
                    {showResponse && <p>Answer : {data[que - 1].answer}</p>}
                </div>
                <div className="footer">
                    <button id='Previous' onClick={handlePrevious}>Previous</button>
                    <button onClick={handleNext}>{(que < 5) ? 'Next' : 'Finish'}</button>
                </div>
            </div>
        </div>
    )
}

export default QuizApp