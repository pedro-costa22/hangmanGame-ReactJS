import './Key.css';

function Key({setKey, keyValue}){
    return (
        <button className='btnKey' onClick={() => setKey(keyValue)}>{keyValue}</button>
    )

};

export default Key;
