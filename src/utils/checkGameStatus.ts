import { BoardItemI } from '../components/Board/Board';

import { CELL_STATUS, GAME_STATUS } from '../constants/setup';


export const checkGameStatus = (board: BoardItemI[][]) => {
  const win = board.every(row => {
    return row.every(cell => {
      return (
        cell.status === CELL_STATUS.NUMBER ||
        (cell.isMine &&
          (cell.status === CELL_STATUS.HIDDEN ||
            cell.status === CELL_STATUS.FLAGGED))
      )
    })
  })

  return win ? GAME_STATUS.WIN : GAME_STATUS.PLAY;
};
