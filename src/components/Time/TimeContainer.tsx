import { useState, useEffect, Dispatch } from "react";

import { BoardItemI } from "../Board/Board";
import { Time } from "./Time";

import { GAME_TIME, GAME_STATUS, MEASURE } from "../../constants/setup";
import { revealBoard } from "../../utils/revealBoard";


interface TimeContainerProps {
  type: MEASURE, 
  gameStatus: GAME_STATUS,
  setGameStatus: Dispatch<GAME_STATUS>,
  board: BoardItemI[][],
}

export const TimeContainer = ({type, gameStatus, setGameStatus, board} : TimeContainerProps) => {
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
      }, 200);

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
  }, [board, gameStatus, gameTimer, setGameStatus, start])

  return (
    <Time time={type === MEASURE.timer ? gameMinutes : gameSeconds} />
  )
};
