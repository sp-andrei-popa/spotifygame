import React, {createContext, useMemo, useState} from 'react';
import logo from './logo.svg';
import {GameContextType} from "./Types";
import {Home} from "./pages/Home";
import {Game} from "./pages/Game";

export const GameContext = createContext<GameContextType>({
  hasGameStarted: true,
  setHasGameStarted: () => {},
  hasUserLost: false,
  setHasUserLost: () => {},
  score: 0,
  setScore: () => {},
  isButtonVisible: true,
  setIsButtonVisible: () => {}
})

const App = () => {
  const [hasGameStarted, setHasGameStarted] = useState<boolean>(true);
  const [hasUserLost, setHasUserLost] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);

  const contextValue = useMemo(() => {
    return {
      hasGameStarted,
      setHasGameStarted,
      hasUserLost,
      setHasUserLost,
      score,
      setScore,
      isButtonVisible,
      setIsButtonVisible,
    };
  }, [hasGameStarted, hasUserLost, score, isButtonVisible]);

  return (
    <GameContext.Provider value={contextValue}>
      {hasGameStarted ? <Home/> : <Game/>}
    </GameContext.Provider>
  );
}

export default App;
