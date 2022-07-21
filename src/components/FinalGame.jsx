import './FinalGame.css';

function FinalGame({condition}){

    const restart = () => {
        return window.location.reload()
    }

    return(
        <div>
           {condition == 'lose' && (
             <div className='lose'>
                <p>Você não conseguiu dessa vez!</p>
                <button onClick={restart} className='btnLose'>Tentar novamente</button>
            </div>
           )}

           {condition == 'win' && (
            <div className='lose'>
                <p>Parabéns, você ganhou! Topa mais uma ? </p>
                <button onClick={restart} className='btnLose'>Jogar novamente</button>
             </div>
           )} 
        </div>
    )
}

export default FinalGame;