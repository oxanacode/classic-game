import { useState } from 'react';

import { Control } from '../Control';
import { Board } from '../Board';
import { TimeContainer } from '../Time';

import { GAME_STATUS, CONTROL_STATUS, MEASURE } from '../../constants/setup';
import { createBoard } from '../../utils/createBoard';

import style from './Game.module.css';


export const Game = () => {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.STOP);
  const [board, setBoard] = useState(createBoard());
  const [controlClass, setControlClass] = useState<CONTROL_STATUS>(CONTROL_STATUS.SMILE);
  
  console.log('render')

  return (
    <main>
      <div className={style.container}>
        <div className={style.top}>
          <TimeContainer type={MEASURE.timer}
            gameStatus={gameStatus}
            setGameStatus={setGameStatus}
            board={board}
          />
          <Control 
            gameStatus={gameStatus}
            setGameStatus={setGameStatus}
            controlClass={controlClass}
            setControlClass={setControlClass}
            setBoard={setBoard}
          />
          <TimeContainer type={MEASURE.stopwatch} 
            gameStatus={gameStatus}
            setGameStatus={setGameStatus}
            board={board}
          />
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
