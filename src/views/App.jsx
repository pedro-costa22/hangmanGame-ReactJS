import './App.css';
import {useState, useEffect} from 'react';
import words from '../words';
import Display from './layout/Display';
import Keyboard from './layout/Keyboard';
import ButtonCategory from '../components/buttonCategory';
import FinalGame from '../components/FinalGame';



function App() {

  const [state, setState] = useState({
      word: '',
      currentLetters: '',
      errorLetter: '',
      accertLetter: '',
      errors: null,
      hit: 0,
      category: '', 
      tip: '',
      condition: '',
  });

  
  const wordsObj = words;

  useEffect(() => {
      let letters = [...state.word];
      handleLetter(letters, state.currentLetters); 
      
      
  }, [state.currentLetters]);

  useEffect(() => {
      if(state.errors >= 7) {
        setState(old => ({
          ...old, 
          condition: 'lose'
        }))
      } 
  }, [state.errors])


  const setLetter = (letter)  => {
      setState(old => ({...old, currentLetters: letter}));
      let teste = [...state.word]
      validGame(teste);
      
  }

  const setCategory = (categorie) => {
    setState(old => ({...old, category: categorie.toLowerCase()}));
  }

  const setCondition = () => {
      setState(old => ({...old, condition: 'win'}));
  }

  const randomWord = () => {
    let num = Math.round(Math.random() * 9);
    let currentWord = wordsObj[state.category][num].word;
    let currenTip = wordsObj[state.category][num].tip;
    setState(old => ({...old, word: currentWord, tip: currenTip}));
  }



  const handleLetter = (word, char) => {
      let checkLetter = word.includes(char);

      if(checkLetter == true){
        setState(old => ({
          ...old, 
          accertLetter: `${state.accertLetter}${char}`
        }));

      } else {
        setState(old => ({
          ...old, 
          errorLetter: `${state.errorLetter} ${char}`, 
          errors: state.errors + 1
        }))
      }
  };

  const validGame = (word) => {
      if((state.hit) == word.length) {
        console.log('ganhou');
      }
  }
 

  return (
    <div>
      <div className='categories'>
            <h2>Escolha uma categoria para jogar: </h2>
            <div className='btns'>
              <ButtonCategory handleCategory={setCategory} category="Programing" color='blue'/>
              <ButtonCategory handleCategory={setCategory} category="Hardware" color='purple'/>
              <ButtonCategory handleCategory={setCategory} category="Games" color='pink'/>
              <ButtonCategory handleCategory={setCategory} category="Anime" color='green'/>
              <ButtonCategory handleCategory={setCategory} category="Sports" color='coral'/>
              <button className='btnCategory play' onClick={randomWord}>Jogar</button>
            </div>
        </div>

        <Display word={state.word} errors={state.errorLetter} accert={state.accertLetter} qtdErrors={state.errors} category={state.category} tip={state.tip} setCondition={setState}/>
        {state.condition == '' ? <Keyboard setLetter={setLetter}/> : state.condition == 'lose' ? <FinalGame condition="lose"/> : <FinalGame condition="win"/>}
    </div>
    
  );
}

export default App;
