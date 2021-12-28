import UrlContext from "../Contexts/UrlContext";
import { useContext, useState } from "react";

const Rules2 = () => {
  const {  url, setUrl } = useContext(UrlContext);
  const { difficulty, setDifficulty} = useContext(UrlContext);
  const { category, setCategory} = useContext(UrlContext);
  const [active, setActive] = useState("list-theme");

  
  function handleDifficulty(difficulty){
  setDifficulty(difficulty);
  setUrl(`https://opentdb.com/api.php?amount=50&category=${category}&difficulty=${difficulty}&encode=base64`);
  setActive(event.target.id);
  }
  

  return (
    <div>
      <h2 className="rules-title">How to Play ?</h2>
      <h3 className="choose-title">Choose your difficulty </h3>
      <ul className="ul-list">
        <li id='easy'
          className={active === 'easy' ? "list-themeactive" : 'list-theme'}
          onClick={() => handleDifficulty('easy')}
        >
          Easy
        </li>
        <li id='medium'
          className={active === 'medium' ? "list-themeactive" : 'list-theme'}
          onClick={() => handleDifficulty('medium')}
        >
          Medium
        </li>
        <li id='hard'
          className={active === 'hard' ? "list-themeactive" : 'list-theme'}
          onClick={() => handleDifficulty('hard')}
        >
          Hard
        </li>
      
      </ul>
      
    </div>
  );
};

export default Rules2;
