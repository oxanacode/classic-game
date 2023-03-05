import { useState, useEffect } from 'react';

import { BoardProps } from '../Board/Board';

import { CELL_STATUS, CONTROL_STATUS, GAME_STATUS, } from '../../constants/setup';
import { revealCell } from '../../utils/revealCell';
import { placeNewMine } from '../../utils/placeNewMine';
import { flagCell } from '../../utils/flagCell';
import { checkGameStatus } from '../../utils/checkGameStatus';
import { revealBoard } from '../../utils/revealBoard';

import './Cell.css';


export interface PositionI {
  x: number, 
  y: number,
}

interface CellProps extends BoardProps {
  position: PositionI;
}

export const Cell = ({ position, board, setBoard, gameStatus, setGameStatus, setControlClass }: CellProps) => {
  const [cellClass, setCellClass] = useState<string>('');
  const cell = board[position.x][position.y];

  useEffect(() => {
    setCellClass(cell.numberOfMines || cell.status);
    console.log()
  },[cell.numberOfMines, cell.status])

  const handleClick = () => {
    if (gameStatus === GAME_STATUS.STOP) {
      if (cell.isMine) {
        setBoard(placeNewMine(board, position));
      } else {
        revealCell(board, position);
      }

      setGameStatus(GAME_STATUS.PLAY);
    }

    if (cell.status !== CELL_STATUS.HIDDEN || gameStatus !== GAME_STATUS.PLAY) {
      return;
    }
    
    if (cell.isMine) {
      setGameStatus(GAME_STATUS.LOSE);
      cell.status = CELL_STATUS.MINE_FAIL;

      revealBoard(board);

      return;
    } 
    
    setBoard(revealCell(board, position));
    setGameStatus(checkGameStatus(board));
  }

  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    console.log(gameStatus)

    if (gameStatus === GAME_STATUS.STOP) {
      flagCell(board, position);
      setGameStatus(GAME_STATUS.PLAY);
    }

    if (cell.status === CELL_STATUS.NUMBER || gameStatus !== GAME_STATUS.PLAY) {
      return;
    } 

    setBoard(flagCell(board, position));
  }

  return (
    <div className={cellClass} 
      onClick={handleClick} 
      onContextMenu={handleRightClick}
      onMouseDown={() => gameStatus === GAME_STATUS.PLAY ? setControlClass(CONTROL_STATUS.SCARED) : null}
      onMouseUp={() => gameStatus === GAME_STATUS.PLAY ? setControlClass(CONTROL_STATUS.SMILE) : null}
    >
    </div>
  )
}