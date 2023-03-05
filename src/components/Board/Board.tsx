import { Dispatch } from 'react';

import { Cell } from '../Cell';

import { BOARD_SIZE, CELL_STATUS, CONTROL_STATUS, GAME_STATUS }  from '../../constants/setup';

import style from './Board.module.css';


export interface BoardItemI {
  isMine: boolean,
  revealed: boolean,
  status: CELL_STATUS,
  numberOfMines: string,
}

export interface CommonProps {
  setBoard: Dispatch<BoardItemI[][]>,
  gameStatus: GAME_STATUS,
  setGameStatus: Dispatch<GAME_STATUS>,
  setControlClass: Dispatch<CONTROL_STATUS>,
}

export interface BoardProps extends CommonProps{
  board: BoardItemI[][],  
}

export const Board = ({ board, setBoard, gameStatus, setGameStatus, setControlClass }: BoardProps) => {

  return (
    <div className={style.board}>{
      [...Array(BOARD_SIZE)].map((_, i) => 
        <div className={style.row} key={`row${i}`}>
          {
            [...Array(BOARD_SIZE)].map((_, j) => 
              <Cell 
                position={{x: i, y: j}}
                board={board}
                setBoard={setBoard}
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
                setControlClass={setControlClass}
                key={`col${j}`}
              />
            )
          }
        </div>
      )}
    </div>
  )
};
