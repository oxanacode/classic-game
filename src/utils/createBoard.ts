import { NUMBER_OF_MINES, BOARD_SIZE, CELL_STATUS } from "../constants/setup";


const getRandomNumber = (size: number): number => {
  return Math.floor(Math.random() * size);
};

export const createBoard = () => {
  const board = Array.from(Array(BOARD_SIZE), () => {
    return Array.from(Array(BOARD_SIZE), () => {
      return {
        isMine: false,
        revealed: false,
        status: CELL_STATUS.HIDDEN,
        numberOfMines: '',
      }
    });
  });

  let mines = 0;

  while (mines < NUMBER_OF_MINES) {
    const x = getRandomNumber(BOARD_SIZE);
    const y = getRandomNumber(BOARD_SIZE);

    if (!board[x][y].isMine) {
      board[x][y].isMine = true;
      mines++;
    }
  }

  return board;
};
