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
function playRound(playerSelection, computerSelection){
    // Convert player selection to lowercase
    let playerAnswer = playerSelection.toLowerCase().trim();
    let tieMessage = 'It\'s a tie!'

    // Checking if player selection matches computer selection
    if(playerAnswer == computerSelection.toLowerCase()){
        return 'It\'s a tie!'
    } else {
        switch (playerAnswer){
            case 'rock':
                if(computerSelection == 'Paper'){
                    return 'You lose! Paper beats rock!'
                }
                else {
                    return 'You win! Rock beats scissors!'
                }
            case 'paper':
                if(computerSelection == 'Rock'){
                    return 'You win! Paper beats rock!'
                } else {
                    return 'You lose! Scissors beat paper!'
                }
            case 'scissors':
                if(computerSelection == 'Rock'){
                    return 'You lose! Rock beats scissors!'
                } else {
                    return 'You win! Scissors beat paper!'
                }
            default: 
                return 'No such option! Choose between rock, paper and scissors.'
        }
    }
}
// A game of 5 rounds
function game(){
    for (let i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt('Please enter your choice (rock, paper or scissors): ')
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult)
    }
    
}
game()
