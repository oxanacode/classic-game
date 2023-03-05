import { useEffect } from 'react';

import { CommonProps } from '../Board/Board';

import { CONTROL_STATUS, GAME_STATUS } from '../../constants/setup';
import { createBoard } from '../../utils/createBoard';

import './Control.css';


interface ControlI extends CommonProps{
  controlClass: CONTROL_STATUS;
}

export const Control = ({ gameStatus, setGameStatus, controlClass, setControlClass, setBoard }: ControlI) => {
  useEffect(() => {
    if (gameStatus === GAME_STATUS.STOP || gameStatus === GAME_STATUS.PLAY) {
      setControlClass(CONTROL_STATUS.SMILE);
    } else if (gameStatus === GAME_STATUS.WIN) {
      setControlClass(CONTROL_STATUS.WIN);
    } else if (gameStatus === GAME_STATUS.LOSE) {
      setControlClass(CONTROL_STATUS.LOSE);
    }
  }, [gameStatus, setControlClass])

  const handleClick = () => {
    setBoard(createBoard());
    setGameStatus(GAME_STATUS.STOP);
  };

  return (
    <button className={`control ${controlClass}`} onClick={handleClick}>
      Restart the Game
    </button>
  )
};
