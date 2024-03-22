
//Define choiceNumber variable that randomly picks between 0, 1, and 2, then assign the computer rock, paper, or scissors based on that number.
function getComputerChoice () {

    let computerChoice;
   let choiceNumber = Math.floor(Math.random() * 3);
   console.log(choiceNumber);

   if (choiceNumber == 0) {
        computerChoice = "rock";
   } else if (choiceNumber == 1) {
        computerChoice = "paper";
   } else if (choiceNumber == 2) {
        computerChoice = "cissors";
   };

   console.log(computerChoice);
   return computerChoice;

}

function getUserChoice () {
    let userChoice = prompt('Please choose: Rock, Paper, Scissors');
    console.log(userChoice);

}