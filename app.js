const compChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const Choices = ['🪨', '🧻', '✂️']
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = Choices.indexOf(e.target.id)
    userChoiceDisplay.innerHTML = e.target.id
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    computerChoice = Math.floor(Math.random() * possibleChoices.length)
    compChoiceDisplay.innerHTML = Choices[computerChoice]
}


function getResult(){
    if(userChoice === computerChoice){
        result = 'It\'s a draw'
    }
    else if(Math.abs(userChoice - computerChoice) === 2){
        let r = (userChoice < computerChoice ? 'You' : 'AI')
        result = 'The winner is ' + '<span class = \'' + r + '\'>' + r + '</span' 
    }
    else{
        let r = (userChoice > computerChoice ? 'You' : 'AI')
        result = 'The winner is ' + '<span class = \'' + r + '\'>' + r + '</span' 
    }
    resultDisplay.innerHTML = result
}