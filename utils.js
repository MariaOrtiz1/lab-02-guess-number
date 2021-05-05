export function compareGuess(guessBox, targetNumber) {
    if (guessBox < targetNumber){
        return -1;
    } else if (guessBox === targetNumber){
        return 0;
    }
    else if (guessBox > targetNumber){
        return +1;
    }
}