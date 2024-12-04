import '../css/ButtonPanel.css';
import Button from './Button';

const ButtonPanel = (props) => {

    return (
        <div className="button-panel">
            <Button updateCounter={()=>props.updateCounter('add')} className='counter-button' text="Add: " incrementValue={props.incrementValue} />
            <Button updateCounter={()=>props.updateCounter('init')} className='counter-button' text='Initial Val' />
            <Button updateCounter={()=>props.updateCounter('reset')} className='counter-button' text='Reset' />
        </div>
    );
}

export default ButtonPanel