import './App.css';
import './style.scss';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelpIcon from '@mui/icons-material/Help';
import Home from './components/Home';
import Questions from './components/Questions';
import EndGame from './components/EndGame';
import Welcome from './components/Welcome';
import Scores from './components/Scores';
import Settings from './components/Settings';
import Rules3 from './components/Rules3';
import UrlContext from './Contexts/UrlContext';
import Modal from './components/Modal';

function App() {
  const [username, setUsername] = useState('Choose  username below ');
  const [url, setUrl] = useState();
  const [difficulty, setDifficulty] = useState('');
  const [category, setCategory] = useState('');
  const [finalScore, setFinalScore] = useState(0);
  const [show, setShow] = useState(false);

  function onUserNameChange(randomName) {
    setUsername(randomName);
  }

  async function onFinish(finishScore) {
    setFinalScore(finishScore);

    await fetch(`${process.env.REACT_APP_BUZZLE_API}/leaderboard`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, score: finishScore }),
    });
  }

  return (
    <>
      <div className="help-icon" onClick={() => setShow(true)}>
        <HelpIcon />
      </div>
      <Modal onClose={() => setShow(false)} show={show}>
        <p>This is modal body</p>
      </Modal>
      <BrowserRouter>
        <UrlContext.Provider
          value={{
            url,
            setUrl,
            difficulty,
            setDifficulty,
            category,
            setCategory,
          }}
        >
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/home">
              <Home username={username} onUserNameChange={onUserNameChange} />
            </Route>
            <Route exact path="/settings">
              <Settings username={username} />
            </Route>
            <Route path="/questions">
              <Questions
                username={username}
                onFinish={(score) => onFinish(score)}
              />
            </Route>
            <Route path="/endgame">
              <EndGame username={username} score={finalScore} />
            </Route>
            <Route path="/scores">
              <Scores />
            </Route>
            <Route path="/rules3">
              <Rules3 />
            </Route>
          </Switch>
        </UrlContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
