import React, { useState,useEffect } from 'react';
import Modal from '../modal';
import leaves from '../images/cloud.jpg.png';
import './que.css';

function Que() {
    const questions = [
        {
            number: 1,
            question: "What's the biggest animal?",
            answer: "Blue Whale"
        },
        {
            number: 2,
            question: "Who's the current president of the Philippines?",
            answer: "Marcos"
        },
        {
            number: 3,
            question: "What's the capital of France?",
            answer: "Paris"
        },
        {
            number: 4,
            question: "What's 2 + 2?",
            answer: "4"
        },
        {
            number: 5,
            question: "What color is the sky?",
            answer: "Blue"
        }
    ];

    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(0);
    const [uanswer, userAnswer] = useState("");
    const [showCongrats,setShowCongrats] = useState(false);

    const [timer, setTimer] = useState(0);
    const [isVisible,setButtonVisible ] = useState(true);



    useEffect (() => {
        let interval = null;

        if(showModal){
            interval = setInterval(() => {
            setTimer(Prevtimer => Prevtimer + 1)
        }, 1500);
    }else{
        clearInterval(interval)
    }
        return() => clearInterval(interval);
    }, [showModal] );


    

    function startButton() {
        setShowModal(true);
        setCount(0);
        setShowCongrats(false);
        userAnswer("");
        setTimer(0);
        setButtonVisible(false);
    }

    function stopButton() {
        setShowModal(false);
        setShowCongrats(false);
        setButtonVisible(true);
    }
    function handleInputChange(event) {
        userAnswer(event.target.value);
    }

    function next() {
        if (uanswer.trim()) {
            const isCorrect = uanswer.trim().toLowerCase() === questions[count].answer.toLowerCase();
            if (isCorrect) {
                if (count + 1 < questions.length) {
                    setCount(prevCount => prevCount + 1);
                    userAnswer("");
                } else {
                    setShowCongrats(true);
                }
            } else {
                alert("That's wrong");
            }
        } else {
            alert("Answer the question");
        }
    }

    return (
        <div id="whole">
            <div className="falling1">
            <section className="upper">
            <h1> QUESTIONNAIRE</h1>
            </section>
            <div className='Uno1'><img src={leaves} alt='leave'/></div>
            <div className='Dos1'><img src={leaves} alt='leave'/></div>
            <div className='Tres1'><img src={leaves} alt='leave'/></div>
            <div className='Kwatro1'><img src={leaves} alt='leave'/></div>
            <div className='Singko1'><img src={leaves} alt='leave'/></div>
            </div>
            {isVisible &&
            <button className="Start"onClick={startButton}>
                Start
            </button>
            }
            <Modal show={showModal} onClose={stopButton}>

                <h1 className="head">Questionnaires</h1>
                <p>Timer: {timer} seconds</p>
                {showCongrats? (
                    <div className='congrats-message'>
                        <h3>Congrats!</h3>
                        <p>You answered all the questions correctly</p>
                    </div>
                ) : ( 
                <div className="the-questions">
                    <p>{questions[count].question}</p>
                    <input type='text' value={uanswer} onChange={handleInputChange}></input>
                    <button className="butt"onClick={next}>Next</button>
                </div>
                )}
            </Modal>
        </div>
    );
}

export default Que;