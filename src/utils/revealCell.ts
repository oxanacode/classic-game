import { BoardItemI } from '../components/Board/Board';
import { PositionI } from '../components/Cell/Cell';

import { CELL_STATUS, NUMBERS } from '../constants/setup';
import { getNumberOfNearbyMines } from './getNumberOfNearbyMines';


export function revealCell(board: BoardItemI[][], position: PositionI): BoardItemI[][]  {
  let cell = board[position.x][position.y];

  if (cell.status !== CELL_STATUS.HIDDEN || cell.isMine) {
    return board;
  }

  cell.revealed = true;
  cell.status = CELL_STATUS.NUMBER;

  const mines = getNumberOfNearbyMines(board, position);

  cell.numberOfMines = mines;

  if (mines === NUMBERS[0]) {
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      for (let yOffset = -1; yOffset <= 1; yOffset++) {
        const neighboringCell = board[position.x + xOffset]?.[position.y + yOffset];
      
        if (neighboringCell) {
          revealCell(board, { x: position.x + xOffset, y: position.y + yOffset });
        }
      }
    }
  }

  return [...board];
};
