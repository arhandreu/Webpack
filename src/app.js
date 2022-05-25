console.log('app worked');

import Game, {GameSavingData, 
    readGameSaving as saveGame, writeGameSaving as loadGame} from "./game"

const game = new Game();
game.start();