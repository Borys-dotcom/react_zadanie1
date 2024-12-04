import '../css/Counter.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Step from './Step';
import Clock from './Clock';
import { useEffect, useState } from 'react';

const Counter = (props) => {
    const [counter, setCounter] = useState(props.initValue);
    // const [showClock, setShowClock] = useState(true);

    const updateCounter = (action) => {
        if (action === 'add') {
            setCounter(Number(counter) + Number(incrementValue));
        } else if (action === 'init') {
            setCounter(props.initValue);
        } else if (action === 'reset') {
            setCounter(0);
        }
    }

    const [incrementValue, setIncrementValue] = useState(1);

    const getIncrementValue = (value) => {
        setIncrementValue(value);
    }
    // useEffect(() => {
    //     console.log('wywołanie use effecta')
    // }, [counter, showClock]);

    return (
        <div className={props.className}>
            <Display className='display' counter={counter} />
            <ButtonPanel updateCounter={updateCounter} incrementValue={incrementValue}/>
            <Step getIncrementValue={getIncrementValue}/>
            {/* {showClock ? <Clock setShowClock={setShowClock}/> : <p className='clockControl' onClick={()=>setShowClock(true)}>pokaż zegar</p>} */}
        </div>
    );
};

export default Counter