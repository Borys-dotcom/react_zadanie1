import '../css/Button.css';

const Button = (props) => {
    let btnText = '';

    if (props.incrementValue === undefined) {
        btnText = props.text;
    } else {
        btnText = "Add: " + props.incrementValue;
    }


    return (
        <button onClick={props.updateCounter} className={props.className}>{btnText}</button>
    );
}

export default Button