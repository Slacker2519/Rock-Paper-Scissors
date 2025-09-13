let humanScore = 0;
let computer_Score = 0;

const result = document.querySelector(".result");
const score = result.querySelector(".score");
const player = score.querySelector(".player");
const computer = score.querySelector(".computer");
const playerScore = player.querySelector(".player-score");
const computerScore = computer.querySelector(".computer-score");
const announcer = result.querySelector(".announcer");

const playerChoice = document.querySelector(".player-choice");
const rock = playerChoice.querySelector(".rock");
const paper = playerChoice.querySelector(".paper");
const scissors = playerChoice.querySelector(".scissors");

const matchHistory = document.querySelector(".match-history");
const playerHistory = matchHistory.querySelector(".player");
const playerChoices = playerHistory.querySelector(".player-choices");
const computerHistory = matchHistory.querySelector(".computer");
const computerChoices = computerHistory.querySelector(".computer-choices");

function getComputerChoice() 
{
    let randomNumber = Math.random();
    randomNumber = randomNumber * 100;
    randomNumber = Math.round(randomNumber)

    switch (true) 
    {
        case (randomNumber < 33):
            return "rock";
        case (randomNumber < 66):
            return "paper";
        default:
            return "scissor";
    }
}

function getHumanChoice() 
{
    let choice = prompt("rock, paper or scissor?", "rock");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice == 'rock')
    {
        if (computerChoice == 'rock') 
            draw(humanChoice, computerChoice);
        else if (computerChoice == 'paper')
            youLose(humanChoice, computerChoice);
        else if (computerChoice == 'scissor')
            youWin(humanChoice, computerChoice);
    }
    else if (humanChoice == 'paper')
    {
        if (computerChoice == 'rock') 
            youWin(humanChoice, computerChoice);
        else if (computerChoice == 'paper')
            draw(humanChoice, computerChoice);
        else if (computerChoice == 'scissor')
            youLose(humanChoice, computerChoice);
    }
    else if (humanChoice == 'scissor')
    {
        if (computerChoice == 'rock') 
            youLose(humanChoice, computerChoice);
        else if (computerChoice == 'paper')
            youWin(humanChoice, computerChoice);
        else if (computerChoice == 'scissor')
            draw(humanChoice, computerChoice);
    }
}

function youWin(humanChoice, computerChoice)
{
    humanScore++;
    console.log("You win! " + humanChoice + " beats " + computerChoice)
    displayScore();
}

function youLose(humanChoice, computerChoice)
{
    computer_Score++;
    console.log("You lose! " + computerChoice + " beats " + humanChoice)
    displayScore();
}

function draw(humanChoice, computerChoice)
{
    console.log("It's a draw! " + humanChoice + " vs " + computerChoice)
    displayScore();
}

function displayScore()
{
    console.log("Human: " + humanScore + "__________" + "Computer: " + computer_Score);
}

function playGame()
{
    for (let i = 0; i < 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelectioin = getComputerChoice();

        playRound(humanSelection, computerSelectioin);
    }

    const humanSelection = getHumanChoice();
    const computerSelectioin = getComputerChoice();

    playRound(humanSelection, computerSelectioin);
}