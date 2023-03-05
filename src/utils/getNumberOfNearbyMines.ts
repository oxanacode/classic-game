import { BoardItemI } from '../components/Board/Board';
import { PositionI } from '../components/Cell/Cell';
import { NUMBERS } from '../constants/setup';


export const getNumberOfNearbyMines = (board: BoardItemI[][], position: PositionI): string => {
  let mines = 0;

  for (let xOffset = -1; xOffset <= 1; xOffset++) {
    for (let yOffset = -1; yOffset <= 1; yOffset++) {
      const cell = board[position.x + xOffset]?.[position.y + yOffset];
      
      if (cell && cell.isMine) {
        mines ++;
      }
    }
  }

  return NUMBERS[mines];
};
