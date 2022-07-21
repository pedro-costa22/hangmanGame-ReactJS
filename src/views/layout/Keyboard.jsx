import Key from "../../components/Key";
import '../../components/Key.css';


function Keyboard({setLetter}){
    return(
       <div className="keyboard">
            <Key setKey={setLetter} keyValue="A"/>
            <Key setKey={setLetter} keyValue="B" />
            <Key setKey={setLetter} keyValue="C" />
            <Key setKey={setLetter} keyValue="D" />
            <Key setKey={setLetter} keyValue="E" />
            <Key setKey={setLetter} keyValue="F" />
            <Key setKey={setLetter} keyValue="G" />
            <Key setKey={setLetter} keyValue="H" />
            <Key setKey={setLetter} keyValue="I" />
            <Key setKey={setLetter} keyValue="J" />
            <Key setKey={setLetter} keyValue="K" />
            <Key setKey={setLetter} keyValue="L" />
            <Key setKey={setLetter} keyValue="M" />
            <Key setKey={setLetter} keyValue="N" />
            <Key setKey={setLetter} keyValue="O" />
            <Key setKey={setLetter} keyValue="P" />
            <Key setKey={setLetter} keyValue="Q" />
            <Key setKey={setLetter} keyValue="R" />
            <Key setKey={setLetter} keyValue="S" />
            <Key setKey={setLetter} keyValue="T" />
            <Key setKey={setLetter} keyValue="U" />
            <Key setKey={setLetter} keyValue="V" />
            <Key setKey={setLetter} keyValue="W" />
            <Key setKey={setLetter} keyValue="X" />
            <Key setKey={setLetter} keyValue="Y" />
            <Key setKey={setLetter} keyValue="Z" />
            <Key setKey={setLetter} keyValue="Ç" />
            
       </div>
    )
};

export default Keyboard;