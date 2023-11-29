import React, { useState } from 'react';
import Hangman from './Hangman';




export default function Homepage() {
  const [showHangman, setShowHangman] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [category, setCategory] = useState('');

  const startHangman = (level) => {
    setDifficultyLevel(level);
    setShowHangman(true);
  };

  const selectCat = (Category) =>{
    setCategory(Category);
  };

 
  
  return (


    <div className="Hangman">

      {/* อย่าลืมใส่ !showHangman ถ้าลืมจะติดหน้าเล่นเกม */}
        {!showHangman }

        

       
        {!showHangman && (
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 300,
              zIndex: 5
            }}
          >
            <a href="/">
            <h1>Hangman. <small>Do (or) 💀</small></h1>
          </a>
          </div>
        )}

          
{!showHangman && (
            <div
            style={{
              padding: 30,
              marginTop: 30 ,
              display: 'flex' ,
              gap: 50,
              justifyContent: "center",
              alignItems: "center",
            }}

          >
            <>
            <button
              id='Easy'
              className="Hangman-reset3 mx-2 animated-button"
              onClick={() => selectCat('Animal')}>
              Animal🐻
            </button>
            <button
              id='Medium'
              className="Hangman-reset2 mx-2 animated-button"
              onClick={() => selectCat('Programming')}>
              Computer Lang👨🏿‍💻
            </button>
            <button
              id='Hard'
              className="Hangman-reset3 mx-2 animated-button"
              onClick={() => selectCat('Country')}>
              Country🌎
            </button>
            </>
                
            </div>
              
          )}
{!showHangman && category != "" && (
            <div
            style={{
              display: 'flex' ,
              gap: 50,
              justifyContent: "center",
              alignItems: "center",
            }}

            
          >
            <>
            <button
              id='Easy'
              className="Hangman-reset mx-2 animated-button"
              onClick={() => startHangman('Easy')}>
              Ez😀
            </button>
            <button
              id='Medium'
              className="Hangman-reset mx-2 animated-button"
              onClick={() => startHangman('Medium')}>
              Mid🤔
            </button>
            <button
              id='Hard'
              className="Hangman-reset mx-2 animated-button"
              onClick={() => startHangman('Hard')}>
              Hard🥵
            </button>
            </>
                
            </div>
              
          )}


          {!showHangman && (
            <ul className="circles" style={{zIndex:1}}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
          )}
        {showHangman && <Hangman difficultyLevel={difficultyLevel} category ={category} />}
    </div>
  );
  
}

