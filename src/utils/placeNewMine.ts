import { BoardItemI } from '../components/Board/Board';
import { PositionI } from '../components/Cell/Cell';

import { BOARD_SIZE } from '../constants/setup';
import { revealCell } from './revealCell';


const getRandomNumber =(size: number): number => {
  return Math.floor(Math.random() * size);
};

export const placeNewMine = (board: BoardItemI[][], position: PositionI) => {
  const cell = board[position.x][position.y];
  let isMinePlaced = false;

  while(!isMinePlaced) {
    const x = getRandomNumber(BOARD_SIZE);
    const y = getRandomNumber(BOARD_SIZE);

    if (!board[x][y].isMine) {
      board[x][y].isMine = true;
      isMinePlaced = true;
    }
  }

  cell.isMine = false;
  revealCell(board, position);

  return board;
};
