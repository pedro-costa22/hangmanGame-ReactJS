import { useEffect, useRef } from 'react';
import Category from '../../components/Category';
import Tip from '../../components/Tip';
import './Display.css';
import forca1 from './img/forca-0.png';
import forca2 from './img/forca-1.png';
import forca3 from './img/forca-2.png';
import forca4 from './img/forca-3.png';
import forca5 from './img/forca-4.png';
import forca6 from './img/forca-5.png';
import forca7 from './img/forca-6.png';




function Display({word, errors, accert, qtdErrors, category, tip, setCondition}){

   
    let letters = [...word];
    let erros =  [...errors];
    let handleLetter = [...accert];
    let forca = [forca1, forca2, forca3, forca4, forca5, forca6, forca7];

    useEffect(() => {
       
        let response = [];
            
        letters.forEach(letter => {
            if(handleLetter.includes(letter)) {
                response.push(true)
            } 
        });

        console.log(response);

        if(letters.length === response.length && letters != ''){
            setCondition(old =>({
                ...old, 
                condition: 'win'
            }))
        }

        /*se for igual e diferente de vazio */
    }, [accert]);

       
   


    return(
        <div className="display">

            <div className='forca'>
                <img src={forca[qtdErrors - 1]} alt="Forca inicio" />
            </div>

            <div className='words'>
                <div className='errors'>
                    <Category category={category}/>
                    <h2>Palpites Incorretos</h2>
                    {erros.map ((error) => 
                        
                        <span>{error} - </span>
                    )}
                </div>


                <div className='hits'>
                    {letters.map ((letter) => 
                        
                        <span className='caractere'>
                            {handleLetter.includes(letter) == true ? <p className='active'>{letter}</p> : <p>{letter}</p>}
                        </span>
                       
                    
                    )}
                   
                </div>
                    
                    {letters != '' ?  <Tip tip={tip} /> : ''}
                
                
            </div>
        </div>
        
    );

   
};

export default Display;