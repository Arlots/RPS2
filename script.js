
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

    //console.log(`Computer: ${computerChoice}`);
   return computerChoice;

}

function welcome () {
    let welcomeScreen = document.createElement("div");
    welcomeScreen.setAttribute("class", "welcomeScreen");

    let welcomeHeader = document.createElement("h2");
    welcomeHeader.innerText = "How to Play: \n Rock Paper Scissors!";
    welcomeHeader.setAttribute("style", "text-align: center; font-size: 40px;")
    welcomeScreen.appendChild(welcomeHeader);

    let welcomeIntro = document.createElement("p");
    welcomeIntro.setAttribute("style", "margin-left: 3rem; font-size: 24px;")

    welcomeIntro.innerText = "To play Rock Paper Scissors, click the start button below. \n\n Play against the computer by picking your choice by clicking on the picture of the choice you want. \n\n The score will be kept in the lower-left corner! \n\n Enjoy!"
    welcomeScreen.appendChild(welcomeIntro);

    let startButton = document.createElement("button");
    startButton.setAttribute("class", "startButton");
    startButton.innerText = "Start Game";
    welcomeScreen.appendChild(startButton);
    startButton.setAttribute("onclick", "playGame()");

    let body = document.querySelector("body");
    body.appendChild(welcomeScreen);
    
}

function playGame () {

    let hideWelcome = document.querySelector(".welcomeScreen");
    hideWelcome.setAttribute("class", "hidden");

    let computerWins = 0;
    let userWins = 0;

    let playerIcon = document.querySelector("#playerIcon");
    let computerIcon = document.querySelector("#computerIcon");

    playerIcon.setAttribute("src", "human.png");
    computerIcon.setAttribute("src", "robot.png");

    let playerScoreCount = document.querySelector("#playerScoreCount");
    let computerScoreCount = document.querySelector("#computerScoreCount");

    playerScoreCount.innerText = `${userWins}`;
    computerScoreCount.innerText = `${computerWins}`;
    
    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");

    rock.addEventListener("click", function () {
        let computerChoice = getComputerChoice();
        let userChoice = 'rock'; 
        let winner;

        if (userChoice == computerChoice) {
            alert("It's a tie!")
            //console.log("It's a tie!")
        } else if ((userChoice == 'rock' && computerChoice == 'paper') || (userChoice == 'paper' && computerChoice == 'scissors') ||(userChoice == 'scissors' && computerChoice == 'rock')  ) {
            alert(`Too bad! You chose ${userChoice}, but your opponent chose ${computerChoice}. You lose.`);
            //console.log(`Too bad! You chose ${userChoice}, but your opponent chose ${computerChoice}. You lose.`);
            winner = 'computer';
            computerWins ++;
            computerScoreCount.innerText = `${computerWins}`;

            return winner;
        } else {
            alert(`Well done! You chose ${userChoice}, which beat the opponents ${computerChoice}.`);
            //console.log(`Well done! You chose ${userChoice}, which beat the opponents ${computerChoice}.`);
            winner = 'user';
            userWins ++;
            playerScoreCount.innerText = `${userWins}`;
            return winner;
        }
    });

    paper.addEventListener("click", function () {
        let computerChoice = getComputerChoice();
        let userChoice = 'paper'; 
        let winner;

        if (userChoice == computerChoice) {
            alert("It's a tie!")
            //console.log("It's a tie!")
        } else if ((userChoice == 'rock' && computerChoice == 'paper') || (userChoice == 'paper' && computerChoice == 'scissors') ||(userChoice == 'scissors' && computerChoice == 'rock')  ) {
            alert(`Too bad! You chose ${userChoice}, but your opponent chose ${computerChoice}. You lose.`);
            //console.log(`Too bad! You chose ${userChoice}, but your opponent chose ${computerChoice}. You lose.`);
            winner = 'computer';
            computerWins ++;
            computerScoreCount.innerText = `${computerWins}`;

            return winner;
        } else {
            alert(`Well done! You chose ${userChoice}, which beat the opponents ${computerChoice}.`);
            //console.log(`Well done! You chose ${userChoice}, which beat the opponents ${computerChoice}.`);
            winner = 'user';
            userWins ++;
            playerScoreCount.innerText = `${userWins}`;
            return winner;
        }
    });

    scissors.addEventListener("click", function () {
        let computerChoice = getComputerChoice();
        let userChoice = 'scissors'; 
        let winner;

        if (userChoice == computerChoice) {
            alert("It's a tie!")
            //console.log("It's a tie!")
        } else if ((userChoice == 'rock' && computerChoice == 'paper') || (userChoice == 'paper' && computerChoice == 'scissors') ||(userChoice == 'scissors' && computerChoice == 'rock')  ) {
            alert(`Too bad! You chose ${userChoice}, but your opponent chose ${computerChoice}. You lose.`);
            //console.log(`Too bad! You chose ${userChoice}, but your opponent chose ${computerChoice}. You lose.`);
            winner = 'computer';
            computerWins ++;
            computerScoreCount.innerText = `${computerWins}`;

            return winner;
        } else {
            alert(`Well done! You chose ${userChoice}, which beat the opponents ${computerChoice}.`);
            //console.log(`Well done! You chose ${userChoice}, which beat the opponents ${computerChoice}.`);
            winner = 'user';
            userWins ++;
            playerScoreCount.innerText = `${userWins}`;
            return winner;
        }
    });

    /*while (computerWins < 5 && userWins < 5) {
    let winner = playRound();
        if (winner == 'computer') {
            computerWins++;
        } else if (winner == 'user') {
            userWins++;
        }
    alert(`Computer: ${computerWins} You: ${userWins}`);
    //console.log(`Computer: ${computerWins}`);
    //console.log(`You: ${userWins} `);

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
        alert("Thanks for playing! Refresh the browser to start playing again!")
        //console.log("Thanks for playing! Refresh the browser to start playing again!")
    }*/
}

/*function getUserChoice () {
    let userChoice = prompt('Please choose: Rock, Paper, Scissors');
    let userChoiceLowerCase = userChoice.toLowerCase();

    while (userChoiceLowerCase !== 'rock' && userChoiceLowerCase !== 'paper' && userChoiceLowerCase !== 'scissors') {
        userChoice = prompt('Those options are unavailable, please choose again: Rock, Paper, Scissors');
        userChoiceLowerCase = userChoice.toLowerCase();
    } 
    //console.log(`You: ${userChoiceLowerCase}`);
    return userChoiceLowerCase; 
   
}*/

/* Original code. playGame() takes pieces of this to make UI version

function playRound () {

   let computerChoice = getComputerChoice();
   let userChoice = getUserChoice(); 
   let winner;

    if (userChoice == computerChoice) {
        alert("It's a tie!")
        //console.log("It's a tie!")
    } else if ((userChoice == 'rock' && computerChoice == 'paper') || (userChoice == 'paper' && computerChoice == 'scissors') ||(userChoice == 'scissors' && computerChoice == 'rock')  ) {
        alert(`Too bad! You chose ${userChoice}, but your opponent chose ${computerChoice}. You lose.`);
        //console.log(`Too bad! You chose ${userChoice}, but your opponent chose ${computerChoice}. You lose.`);
        winner = 'computer';
        return winner;
    } else {
        alert(`Well done! You chose ${userChoice}, which beat the opponents ${computerChoice}.`);
        //console.log(`Well done! You chose ${userChoice}, which beat the opponents ${computerChoice}.`);
        winner = 'user';
        return winner;

    }
}*/　

