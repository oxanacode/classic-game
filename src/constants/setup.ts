import { splitTime } from "../utils/splitTime";

export const NUMBER_OF_MINES = 30;

export const BOARD_SIZE = 16;

export const GAME_TIME = 40;

export const INIT_TIME = splitTime(GAME_TIME);

export enum CELL_STATUS {
  HIDDEN = 'hidden',
  MINE = 'mine',
  NUMBER = 'number',
  FLAGGED = 'flagged',
  QUESTION = 'question',
  MINE_FAIL = 'mine-fail',
  FLAG_MISTAKE = 'flag-mistake',
};

export const NUMBERS = [
  'empty',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
];

export enum GAME_STATUS {
  STOP = 'stop',
  PLAY = 'play',
  WIN = 'win',
  LOSE = 'lose',
};

export enum CONTROL_STATUS {
  SMILE = 'smile',
  WIN = 'win',
  LOSE = 'lose',
  SCARED = 'scared'
};

export enum MEASURE {
  timer,
  stopwatch,
}
