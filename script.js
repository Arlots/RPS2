
//Define choiceNumber variable that randomly picks between 0, 1, and 2, then assign the computer rock, paper, or scissors based on that number.
let computerWins = 0;
let userWins = 0;

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

    welcomeIntro.innerText = "To play Rock Paper Scissors, click the start button below. \n\n Make your chocice by clicking a picture and try to beat the computer! \n\n The score will be kept in the lower-left corner! \n\n Enjoy!"
    welcomeScreen.appendChild(welcomeIntro);

    let startButton = document.createElement("button");
    startButton.setAttribute("class", "startButton");
    startButton.innerText = "Start Game";
    welcomeScreen.appendChild(startButton);
    startButton.setAttribute("onclick", "playGame()");

    let body = document.querySelector("body");
    body.appendChild(welcomeScreen);
    
}

function gameOverUser() {
    let gameOverScreenUser = document.createElement("div");
    gameOverScreenUser.setAttribute("class", "gameOver");

    let gameOverHeader = document.createElement("h2");
    gameOverHeader.innerText = "Congratulations!!";
    gameOverHeader.setAttribute("style", "text-align: center; font-size: 40px;")
    gameOverScreenUser.appendChild(gameOverHeader);

    let gameOverOutro = document.createElement("p");
    gameOverOutro.setAttribute("style", "margin-left: 3rem; font-size: 24px;")

    gameOverOutro.innerText = "You have beaten the computer at Rock Paper Scissors! \n\n To play again, click the button below."
    gameOverScreenUser.appendChild(gameOverOutro);

    let playAgainButton = document.createElement("button");
    playAgainButton.setAttribute("class", "startButton");
    playAgainButton.innerText = "Play Again";
    gameOverScreenUser.appendChild(playAgainButton);
    playAgainButton.setAttribute("onclick", "resetGame()");

    let body = document.querySelector("body");
    body.appendChild(gameOverScreenUser);
}

function gameOverComp() {
    let gameOverScreenComp = document.createElement("div");
    gameOverScreenComp.setAttribute("class", "gameOver");

    let gameOverHeader = document.createElement("h2");
    gameOverHeader.innerText = "You lose! Too bad!";
    gameOverHeader.setAttribute("style", "text-align: center; font-size: 40px;")
    gameOverScreenComp.appendChild(gameOverHeader);

    let gameOverOutro = document.createElement("p");
    gameOverOutro.setAttribute("style", "margin-left: 3rem; font-size: 24px;")

    gameOverOutro.innerText = "The computer beat you at Rock Paper Scissors! \n\n To play again, click the button below."
    gameOverScreenComp.appendChild(gameOverOutro);

    let playAgainButton = document.createElement("button");
    playAgainButton.setAttribute("class", "startButton");
    playAgainButton.innerText = "Play Again";
    gameOverScreenComp.appendChild(playAgainButton);
    playAgainButton.setAttribute("onclick", "resetGame()");

    let body = document.querySelector("body");
    body.appendChild(gameOverScreenComp);
}

function resetGame () {
    userWins = 0;
    computerWins = 0;
    let playerScoreCount = document.querySelector("#playerScoreCount");
    let computerScoreCount = document.querySelector("#computerScoreCount");
    playerScoreCount.innerText = `${userWins}`;
    computerScoreCount.innerText = `${computerWins}`;
    let removeGameOver = document.querySelector(".gameOver");
    removeGameOver.remove();
}

function playGame () {

    let hideWelcome = document.querySelector(".welcomeScreen");
    hideWelcome.remove();

    let playerIcon = document.querySelector("#playerIcon");
    let computerIcon = document.querySelector("#computerIcon");

    playerIcon.setAttribute("src", "human.png");
    computerIcon.setAttribute("src", "robot.png");

    

    userWins = 0;
    computerWins = 0;

    playerScoreCount.innerText = `${userWins}`;
    computerScoreCount.innerText = `${computerWins}`;
    
    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");

    rock.addEventListener("click", function () {
        let computerChoice = getComputerChoice();
        let userChoice = 'rock'; 
        let winLoseText = document.querySelector(".winLoseText");
        winLoseText.innerText = '';

            if (userChoice == computerChoice) {
                winLoseText.innerText = "Tie!";
                winLoseText.setAttribute("style", "color: black;")
            } else if ((userChoice == 'rock' && computerChoice == 'paper') || (userChoice == 'paper' && computerChoice == 'scissors') ||(userChoice == 'scissors' && computerChoice == 'rock')  ) {
                winLoseText.innerText = `Lose! ${computerChoice} beats ${userChoice}!`;
                winLoseText.setAttribute("style", "color: red;")
                computerWins ++;
                computerScoreCount.innerText = `${computerWins}`;
            } else {
                winLoseText.innerText = `Win! ${userChoice} beats ${computerChoice}!`;
                winLoseText.setAttribute("style", "color: green;")
                userWins ++;
                playerScoreCount.innerText = `${userWins}`;
            };

            if (userWins == 5) {
                gameOverUser();
            } else if (computerWins == 5) {
                gameOverComp();
            };

    });

    paper.addEventListener("click", function () {
        let computerChoice = getComputerChoice();
        let userChoice = 'paper'; 
        let winLoseText = document.querySelector(".winLoseText");
        winLoseText.innerText = '';

        if (userChoice == computerChoice) {
            winLoseText.innerText = "Tie!";
            winLoseText.setAttribute("style", "color: black;")
        } else if ((userChoice == 'rock' && computerChoice == 'paper') || (userChoice == 'paper' && computerChoice == 'scissors') ||(userChoice == 'scissors' && computerChoice == 'rock')  ) {
            winLoseText.innerText = `Lose! ${computerChoice} beats ${userChoice}!`;
            winLoseText.setAttribute("style", "color: red;")
            computerWins ++;
            computerScoreCount.innerText = `${computerWins}`;
        } else {
            winLoseText.innerText = `Win! ${userChoice} beats ${computerChoice}!`;
            winLoseText.setAttribute("style", "color: green;")
            userWins ++;
            playerScoreCount.innerText = `${userWins}`;
        }

        if (userWins == 5) {
            gameOverUser();
        } else if (computerWins == 5) {
            gameOverComp();
        };


    });

    scissors.addEventListener("click", function () {
        let computerChoice = getComputerChoice();
        let userChoice = 'scissors'; 
        let winLoseText = document.querySelector(".winLoseText");
        winLoseText.innerText = '';
        winLoseText.removeAttribute("Style", "color");

        if (userChoice == computerChoice) {
            winLoseText.innerText = "Tie!";
            winLoseText.setAttribute("style", "color: black;")
        } else if ((userChoice == 'rock' && computerChoice == 'paper') || (userChoice == 'paper' && computerChoice == 'scissors') ||(userChoice == 'scissors' && computerChoice == 'rock')  ) {
            winLoseText.innerText = `Lose! ${computerChoice} beats ${userChoice}!`;
            winLoseText.setAttribute("style", "color: red;")
            computerWins ++;
            computerScoreCount.innerText = `${computerWins}`;
        } else {
            winLoseText.innerText = `Win! ${userChoice} beats ${computerChoice}!`;
            winLoseText.setAttribute("style", "color: green;")
            userWins ++;
            playerScoreCount.innerText = `${userWins}`;
        }

        if (userWins == 5) {
            gameOverUser();
        } else if (computerWins == 5) {
            gameOverComp();
        };

    });

    

}