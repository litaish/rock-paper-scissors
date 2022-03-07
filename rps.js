const rockChoice = document.getElementById('rockBtn');
const paperChoice = document.getElementById('paperBtn');
const scissorsChoice = document.getElementById('scissorsBtn');

let playerChoice;

rockChoice.addEventListener('click', () => {
    playerChoice = 'Rock';

    playRound(playerChoice, computerPlay());

})
paperChoice.addEventListener('click', () => {
    playerChoice = 'Paper';

    // Plays one round of a game
    playRound(playerChoice, computerPlay());
})
scissorsChoice.addEventListener('click', () => {
    playerChoice = 'Scissors';

    playRound(playerChoice, computerPlay());
})
// Returns a random value from choices - rock, paper or scissors
function computerPlay(){
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[getRandom(0, 2)]
}
// Gets a random number between 0 and 2 (included)
function getRandom(min, max){
    min = Math.ceil(min)
    max = Math.ceil(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// Global wins counters
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection){
    // Checking if player selection matches computer selection
    if(playerSelection == computerSelection.toLowerCase()){
        ++playerWins;
        ++computerWins;
        return 'It\'s a tie!'
    } else {
        switch (playerSelection){
            case 'rock':
                if(computerSelection == 'Paper'){
                    ++computerWins
                    return 'You lose! Paper beats rock!'
                }
                else {
                    ++playerWins;
                    return 'You win! Rock beats scissors!'
                }
            case 'paper':
                if(computerSelection == 'Rock'){
                    ++playerWins;
                    return 'You win! Paper beats rock!'
                } else {
                    ++computerWins
                    return 'You lose! Scissors beat paper!'
                }
            case 'scissors':
                if(computerSelection == 'Rock'){
                    ++computerWins
                    return 'You lose! Rock beats scissors!'
                } else {
                    ++playerWins;
                    return 'You win! Scissors beat paper!'
                }
            default: 
                return 'No such option! Choose between rock, paper and scissors.'
        }
    }
}
function checkWinsAndLosses(){
    if(playerWins == computerWins){
        return 'Game is a tie!'
    } else {
        if(playerWins > computerWins) {
            return 'You are the winner!'
        } else {
            return 'Sorry, you lose.'
        }
    }
}
// A game of 5 rounds
function game(){
    for (let i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let roundResult = playRound(playerChoice, computerSelection);
        console.log(roundResult)
    }
}
game()
console.log(checkWinsAndLosses())

