import React, {useState,useEffect} from 'react';
import './menu.css';

function Timer(){

const [Timer, setTimer] = useState(0);
const [NonAct, Active] = useState(false);

useEffect(() => {
    let interval = null;

    if(NonAct && Timer > 0){
        interval = setInterval(() => {
            setTimer(Timer => Timer - 1)
        }, 1000);
    }else if(Timer === 0){
        clearInterval(interval);
        setTimer(0);
    }
    return() => clearInterval(interval);
}, [NonAct, Timer]);
    
    const start = () =>{
        Active(true)
    };
    const restart = () => {
        Active(false);
        setTimer(0)
    };
    function increment  (){
        setTimer(Prevtimer => Prevtimer + 1);

    }
    function decrement (){
        setTimer(PrevTimer => PrevTimer - 1);

    }

    return(
    <div id="clock-timer">
        <div className="timer">
            <h1>Timer</h1>
            <div className="time">
                <button onClick={decrement} disabled={NonAct}>-</button>
                 {Timer} 
                 <button onClick={increment} disabled={NonAct}>+</button>
                 </div>

                <div className="buttonss">
                    <button className="buttons" onClick={start} disabled={NonAct}>Start Timer</button>
                    <button className="buttons" onClick={restart}>Restart </button>
            </div>
        </div>
    </div>

    )
}
export default Timer;

