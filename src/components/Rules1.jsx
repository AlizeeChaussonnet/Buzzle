import UrlContext from "../Contexts/UrlContext";
import { useContext, useState } from "react";

const Rules1 = () => {
  const {  url, setUrl } = useContext(UrlContext);
  const { difficulty, setDifficulty} = useContext(UrlContext);
  const { category, setCategory } = useContext(UrlContext);
  const [active, setActive] = useState("list-theme");

  function handleUrl(category) {
    setCategory(category);
    setUrl(`https://opentdb.com/api.php?amount=50&category=${category}&difficulty=${difficulty}&encode=base64`);
    const categoriesBackgrounds = {
      9 : 'linear-gradient(45deg, #8e017a, #290180)',
      15 : 'linear-gradient(45deg, #FF0002, #00317A)',
      23 : 'linear-gradient(45deg, #FFBA0A, #00317A)',
      11 : 'linear-gradient(45deg, #4B8209, #00317A)',
      21 : 'linear-gradient(45deg, #FE4802, #00317A)',
    }
    document.body.style.background = categoriesBackgrounds[category] || 'linear-gradient(45deg, #8e017a, #290180)';
    setActive(event.target.id);
  }

  return (
    <div>
      <h2 className="rules-title">How to Play ?</h2>
      <h3 className="choose-title">Choose a theme</h3>
      <ul className="ul-list">
        <li id='1'
          className={active === '1' ? "list-themeactive" : 'list-theme'}
          onClick={() => handleUrl(9)}
        >
          Random theme
        </li>
        <li id='2'
          className={active === '2' ? "list-themeactive" : 'list-theme'}
          onClick={() => handleUrl(15)}
        >
          Video Games
        </li>
        <li id='3'
          className={active === '3' ? "list-themeactive" : 'list-theme'}
          onClick={() => handleUrl(23)}
        >
          History
        </li>
        <li id='4'
          className={active === '4' ? "list-themeactive" : 'list-theme'}
          onClick={() => handleUrl(11)}
        >
          Movies
        </li>
        <li id='5'
          className={active === '5' ? "list-themeactive" : 'list-theme'}
          onClick={() => handleUrl(21)}
        >
          Sports
        </li>
      </ul>
    </div>
  );
};

export default Rules1;
