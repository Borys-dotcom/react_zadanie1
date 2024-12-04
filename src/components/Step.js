import '../css/Step.css'
import { useEffect, useState } from 'react'

const Step = (props) => {

    // useEffect(() => {
    //     props.getIncrementValue(6);
    // })()=>props.getIncrementValue()

    const[inputValue, setInputValue] = useState(1);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        props.getIncrementValue(Math.floor(event.target.value));
        // inputValue = Math.floor(inputValue);
    }

    return (
        <input type="number" min="1" value={inputValue} onChange={handleInputChange}/>
    );
}

export default Step