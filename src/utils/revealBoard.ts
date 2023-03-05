import { BoardItemI } from '../components/Board/Board';

import { CELL_STATUS } from '../constants/setup';


export const revealBoard = (board: BoardItemI[][]) => {
  board.forEach(row => {
    row.forEach(cell => {
      if (cell.status === CELL_STATUS.FLAGGED && !cell.isMine) {
        cell.status = CELL_STATUS.FLAG_MISTAKE;
      }

      if (cell.isMine && cell.status !== CELL_STATUS.MINE_FAIL && cell.status !== CELL_STATUS.FLAGGED) {
        cell.status = CELL_STATUS.MINE;
      }
    })
  })
};
