import './Tip.css';
import {FaQuestion} from 'react-icons/fa'
import {useState} from 'react';

function Tip({tip}){

    const [stateTip, setStateTip] = useState("Clique para ativar uma dica");


    return (
        <div className='tip'>
            <button onClick={() => setStateTip(tip)}><FaQuestion className='icon'/></button>
            <p>{stateTip}</p>
        </div>
    )
};

export default Tip;