const rockChoice = document.getElementById('rockBtn');
const paperChoice = document.getElementById('paperBtn');
const scissorsChoice = document.getElementById('scissorsBtn');

let playerChoice;

rockChoice.addEventListener('click', () => {
    playerChoice = 'rock';

    game(playerChoice);
})
paperChoice.addEventListener('click', () => {
    playerChoice = 'paper';

    // Plays one round of a game
    game(playerChoice);
})
scissorsChoice.addEventListener('click', () => {
    playerChoice = 'scissors';

    game(playerChoice);
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
        displayWins(playerWins, computerWins, 'It\'s a tie!');
    } else {
        switch (playerSelection){
            case 'rock':
                if(computerSelection == 'Paper'){
                    ++computerWins
                    displayWins(playerWins, computerWins, 'You lose! Paper beats rock!');
                    break;
                }
                else {
                    ++playerWins;
                    displayWins(playerWins, computerWins, 'You win! Rock beats scissors!');
                    break;
                }
            case 'paper':
                if(computerSelection == 'Rock'){
                    ++playerWins;
                    displayWins(playerWins, computerWins, 'You win! Paper beats rock!');
                    break;
                } else {
                    ++computerWins
                    displayWins(playerWins, computerWins, 'You lose! Scissors beat paper!');
                    break;
                }
            case 'scissors':
                if(computerSelection == 'Rock'){
                    ++computerWins
                    displayWins(playerWins, computerWins, 'You lose! Rock beats scissors!');
                    break;
                } else {
                    ++playerWins;
                    displayWins(playerWins, computerWins, 'You win! Scissors beat paper!');
                    break;
                }
                
            default: 
                return 'No such option! Choose between rock, paper and scissors.'
        }
    }
}
function displayWins(pWinsCount, cWinsCount, resultMsg) {
    // Display results of round
    const playerWins = document.getElementById('playerWins');
    const computerWins = document.getElementById('computerWins');
    const resultMsgEl = document.getElementById('resultMsg');

    playerWins.innerText = `${pWinsCount}`;
    computerWins.innerText = `${cWinsCount}`;

    // Display result of round
    resultMsgEl.innerText = `${resultMsg}`;
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
function game(playerChoice){
        let computerSelection = computerPlay();
        let roundResult = playRound(playerChoice, computerSelection);
}

