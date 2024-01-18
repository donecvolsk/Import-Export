// TODO: write your code here
//import sum from './basic';
import defaultGame, { GameSavingData, readGameSaving  as loadGame, writeGameSaving as saveGame} from './game';

const game = new defaultGame();
game.start();

console.log('worked');

//console.log(sum([1, 2]));
