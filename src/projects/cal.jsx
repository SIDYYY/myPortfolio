import React, {useState} from 'react';
import './cal.css';
import leaves from '../images/cloud.jpg.png';


function Calculator(){

    const [display, setDisplay] = useState('');
    const [firstnum, setFirst] = useState(null)
    const [operator, setOperator] = useState(null);

    function clear(){
        setDisplay('');
        setFirst(null);
        setOperator(null);
    }

    function handleOperator(value){
        if(['-','+','*','/'].includes(value)) {
            setOperator(value);
            setFirst(parseFloat(display));
            setDisplay('')
        }
        else if (value === '=') {
            if (firstnum !== null && operator && display) {
                const secondNum = parseFloat(display);
                let result;
                switch (operator) {
                    case '+':
                        result = firstnum + secondNum;
                        break;
                    case '-':
                        result = firstnum - secondNum;
                        break;
                    case '*':
                        result = firstnum * secondNum;
                        break;
                    case '/':
                        result = firstnum / secondNum;
                        break;
                    default:
                        return;
                }
                setDisplay(result.toString());
                setFirst(null);
                setOperator(null);
            }
        } else if (value === '.') {
            if (!display.includes('.')) {
                setDisplay(display + value);
            }
        } else {
            setDisplay(display + value);
        }
    }

    return(
<div id="cal">
<div className="swinging">
            <div className='Uno2'><img src={leaves} alt='leave'/></div>
            <div className='Dos2'><img src={leaves} alt='leave'/></div>
            <div className='Tres2'><img src={leaves} alt='leave'/></div>
            <div className='Kwatro2'><img src={leaves} alt='leave'/></div>
            <div className='Singko2'><img src={leaves} alt='leave'/></div>
            </div>
        <div className="falling">
        <section className="upper">
        <h1> CALCULATOR  </h1>
        </section>
        <div className='Uno'>1</div>
        <div className='Dos'>2</div>
        <div className='Tres'>3</div>
        <div className='Kwatro'>4</div>
        <div className='Singko'>5</div>
        </div>
        <div class="calculator">
        <h3> CASIO - ILYDimpax!</h3>
        <div class="display" id="display">{display || '0'}</div>
        <div class="buttonup">
            <button id='num' onClick={() => handleOperator('7')}>7</button>
            <button id='num' onClick={() => handleOperator('8')}>8</button>
            <button id='num' onClick={() => handleOperator('9')}>9</button>
            <button class="operator" onClick={() => handleOperator('/')}>/</button>

            <button id='num' onClick={() => handleOperator('4')}>4</button>
            <button id='num' onClick={() => handleOperator('5')}>5</button>
            <button id='num' onClick={() => handleOperator('6')}>6</button>
            <button class="operator" onClick={() => handleOperator('*')}>*</button>

            <button id='num' onClick={() => handleOperator('1')}>1</button>
            <button id='num' onClick={() => handleOperator('2')}>2</button>
            <button id='num' onClick={() => handleOperator('3')}>3</button>
            <button class="operator" onClick={() => handleOperator('-')}>-</button>

            <button id='num' onClick={() => handleOperator('0')}>0</button>
            <button id='num' onClick={() => handleOperator('.')}>.</button>
            <button class="equals" onClick={() => handleOperator('=')}>=</button>
            <button class="operator" onClick={() => handleOperator('+')}>+</button>

            <button id='num' onClick={clear}>C</button>
        </div>
    </div>
</div>

    );
}
export default Calculator;