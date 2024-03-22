
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

    if (userChoice == computerChoice) {
        console.log("It's a tie!")
    } else if ((userChoice == 'rock' && computerChoice == 'paper') || (userChoice == 'paper' && computerChoice == 'scissors') ||(userChoice == 'scissors' && computerChoice == 'rock')  ) {
        console.log(`Too bad! You chose ${userChoice}, but your opponent chose ${computerChoice}. You lose.`)
    } else {
        console.log(`Well done! You chose ${userChoice}, which beat the opponents ${computerChoice}.`)
    }
}