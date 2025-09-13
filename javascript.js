let humanScore = 0;
let computer_Score = 0;

let playerCurrentChoice;
let computerCurrentChoice;

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
            return "scissors";
    }
}

function getPlayerChoice(buttonInput) 
{
    return buttonInput.textContent.toLowerCase();
}

function playRound(playerChoice, computerChoice)
{
    if (playerChoice == 'rock')
    {
        if (computerChoice == 'rock') 
            draw(playerChoice, computerChoice);
        else if (computerChoice == 'paper')
            youLose(playerChoice, computerChoice);
        else if (computerChoice == 'scissors')
            youWin(playerChoice, computerChoice);
    }
    else if (playerChoice == 'paper')
    {
        if (computerChoice == 'rock') 
            youWin(playerChoice, computerChoice);
        else if (computerChoice == 'paper')
            draw(playerChoice, computerChoice);
        else if (computerChoice == 'scissors')
            youLose(playerChoice, computerChoice);
    }
    else if (playerChoice == 'scissors')
    {
        if (computerChoice == 'rock') 
            youLose(playerChoice, computerChoice);
        else if (computerChoice == 'paper')
            youWin(playerChoice, computerChoice);
        else if (computerChoice == 'scissors')
            draw(playerChoice, computerChoice);
    }

    displayHistory();
}

function youWin(playerChoice, computerChoice)
{
    humanScore++;
    displayScore();
    announcer.textContent = `Player win! ${playerChoice} beats ${computerChoice}`;
}

function youLose(humanChoice, computerChoice)
{
    computer_Score++;
    displayScore();
    announcer.textContent = `Computer win! ${computerChoice} beats ${humanChoice}`;
}

function draw(playerChoice, computerChoice)
{
    displayScore();
    announcer.textContent = "It's a draw! " + playerChoice + " vs " + computerChoice;
}

function displayScore()
{
    playerScore.textContent = humanScore;
    computerScore.textContent = computer_Score;
}

function displayHistory()
{
    let history;

    for (let i = 0; i < 2; i++)
    {
        const item = document.createElement("li");
        const text = document.createElement("span");
        item.appendChild(text);

        if (i == 0) 
        {
            history = playerChoices;
            text.textContent = playerCurrentChoice;
        }
        else 
        {
            history = computerChoices;
            text.textContent = computerCurrentChoice;
        }

        styleHistory(item, text);
        history.appendChild(item);
    }
}

function styleHistory(item, text)
{
    item.style.listStyle = 'none';
    text.style.color = 'white';
    text.style.fontSize = '30px';

    playerChoices.style.padding = 'auto';
    playerChoice.style.margin = 'auto';

}

function playGame(buttonInput)
{
    playerCurrentChoice = getPlayerChoice(buttonInput);
    computerCurrentChoice = getComputerChoice();

    playRound(playerCurrentChoice, computerCurrentChoice);
}

rock.addEventListener("click", () => {
    playGame(rock);
});

paper.addEventListener("click", () => {
    playGame(paper);
});

scissors.addEventListener("click", () => {
    playGame(scissors);
});