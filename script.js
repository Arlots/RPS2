
//Define choiceNumber variable that randomly picks between 0, 1, and 2, then assign the computer rock, paper, or scissors based on that number.
function getComputerChoice () {

    let computerChoice;
   let choiceNumber = Math.floor(Math.random() * 3);

   if (choiceNumber == 0) {
        computerChoice = "rock";
   } else if (choiceNumber == 1) {
        computerChoice = "paper";
   } else if (choiceNumber == 2) {
        computerChoice = "scissors";
   };

    console.log(`Computer: ${computerChoice}`);
   return computerChoice;

}

function getUserChoice () {
    let userChoice = prompt('Please choose: Rock, Paper, Scissors');
    let userChoiceLowerCase = userChoice.toLowerCase();

    while (userChoiceLowerCase !== 'rock' && userChoiceLowerCase !== 'paper' && userChoiceLowerCase !== 'scissors') {
        userChoice = prompt('Those options are unavailable, please choose again: Rock, Paper, Scissors');
        userChoiceLowerCase = userChoice.toLowerCase();
    } 
    console.log(`You: ${userChoiceLowerCase}`);
    return userChoiceLowerCase; 
   
}

function playRound () {

   let computerChoice = getComputerChoice();
   let userChoice = getUserChoice(); 
   let winner;

    if (userChoice == computerChoice) {
        console.log("It's a tie!")
    } else if ((userChoice == 'rock' && computerChoice == 'paper') || (userChoice == 'paper' && computerChoice == 'scissors') ||(userChoice == 'scissors' && computerChoice == 'rock')  ) {
        console.log(`Too bad! You chose ${userChoice}, but your opponent chose ${computerChoice}. You lose.`)
        winner = 'computer';
        return winner;
    } else {
        console.log(`Well done! You chose ${userChoice}, which beat the opponents ${computerChoice}.`)
        winner = 'user';
        return winner;

    }
}

function playGame () {
    let computerWins = 0;
    let userWins = 0;

    while (computerWins < 5 && userWins < 5) {
    let winner = playRound();
        if (winner == 'computer') {
            computerWins++;
        } else if (winner == 'user') {
            userWins++;
        }
    
    console.log(`Computer: ${computerWins}`);
    console.log(`You: ${userWins} `);

    }

    if (userWins == 5) {
        alert(`Congratulations! You won ${userWins} to ${computerWins}!`)
    } else if (computerWins == 5) {
        alert(`Too bad! You lost ${computerWins} to ${userWins}!`)
    }

    let playAgain = prompt("Play again? Enter 'yes' to play again. Enter 'no' to stop playing.");

    if (playAgain.toLowerCase() == 'yes') {
        playGame();
    } else {
        console.log("Thanks for playing! Refresh the browser to start playing again!")
    }


}