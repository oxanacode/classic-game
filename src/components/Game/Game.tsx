import { useEffect, useState } from 'react';

import { Time } from '../Time';
import { Control } from '../Control';
import { Board } from '../Board';

import { GAME_STATUS, CONTROL_STATUS, GAME_TIME } from '../../constants/setup';
import { createBoard } from '../../utils/createBoard';
import { revealBoard } from '../../utils/revealBoard';

import style from './Game.module.css';


export const Game = () => {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.STOP);
  const [board, setBoard] = useState(createBoard());
  const [controlClass, setControlClass] = useState<CONTROL_STATUS>(CONTROL_STATUS.SMILE);
  const [gameMinutes, setMinutes] = useState(GAME_TIME);
  const [gameSeconds, setSeconds] = useState(0);
  const [gameTimer, setGameTimer] = useState<NodeJS.Timer|undefined>();
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (gameStatus === GAME_STATUS.PLAY && !start) {
      const startTime = Date.now();
      const timer = setInterval(function() {
        const delta = Date.now() - startTime;
        let seconds = Math.floor(delta / 1000);
        let minutes = GAME_TIME - Math.floor(seconds / 60);
      
        if (seconds > 60) {
          seconds = seconds % 60;
        }

        if(minutes === 0 && seconds === 60) {
          setGameStatus(GAME_STATUS.LOSE);
          revealBoard(board);
        }
        
        setMinutes(minutes);
        setSeconds(seconds);
      }, 1000);

      setStart(true);
      setGameTimer(timer);
    } else if (gameStatus !== GAME_STATUS.PLAY && gameTimer) {
      clearInterval(gameTimer);
      setStart(false);

      if (gameStatus === GAME_STATUS.STOP) {
        setMinutes(GAME_TIME);
        setSeconds(0);
      }
    } 
  }, [board, gameStatus, gameTimer, start])
  
  return (
    <main>
      <div className={style.container}>
        <div className={style.top}>
          <Time time={gameMinutes} />
          <Control 
            gameStatus={gameStatus} 
            setGameStatus={setGameStatus} 
            controlClass={controlClass} 
            setControlClass={setControlClass}
            setBoard={setBoard}
          />
          <Time time={gameSeconds} />
        </div>
        <Board 
          board={board} 
          setBoard={setBoard} 
          gameStatus={gameStatus} 
          setGameStatus={setGameStatus} 
          setControlClass={setControlClass}
        />
      </div>
    </main>
  )
};
