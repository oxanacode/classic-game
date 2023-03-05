import { BoardItemI } from '../components/Board/Board';
import { PositionI } from '../components/Cell/Cell';

import { CELL_STATUS } from '../constants/setup';


export const flagCell = (board: BoardItemI[][], position: PositionI) => {
  const cell = board[position.x][position.y];
  
  if (cell.status === CELL_STATUS.FLAGGED) {
    cell.status = CELL_STATUS.QUESTION;
  } else if (cell.status === CELL_STATUS.QUESTION){
    cell.status = CELL_STATUS.HIDDEN;
  } else {
    cell.status = CELL_STATUS.FLAGGED;
  }

  return [...board];
};
