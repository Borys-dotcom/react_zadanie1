import '../css/Display.css';

const Display = (props) => {
    return <div className={props.className}>Counter: {props.counter}</div>
}

export default Display