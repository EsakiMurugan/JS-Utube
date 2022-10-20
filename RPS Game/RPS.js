let playGame = confirm("Shall we start the game?")

if(playGame){
    //play
    let playerChoice = prompt('Please enter rock, paper or scissor')
    if (playerChoice){
        let playerOne = playerChoice.trim().toLowerCase()
        if(playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissor'){
            let computerChoice = Math.floor(Math.random() * 3 + 1)

            let computer = computerChoice === 1 ? 'rock' : computerChoice === 2 ? 'paper' : 'scissor'

            let result = 
            playerOne === computer
            ? 'Game Tied!'
            : playerOne === 'rock' && computer === 'paper'
            ? `playerOne : ${playerOne} \n computer : ${computer}
            \n Computer Wins!`
            : playerOne === 'paper' && computer === 'scissor'
            ? `playerOne : ${playerOne} \n computer : ${computer}
            \n Computer Wins!`
            : playerOne === 'scissor' && computer === 'rock'
            ? `playerOne : ${playerOne} \n computer : ${computer}
            \n Computer Wins!`
            : `playerOne : ${playerOne} \n computer : ${computer}
            \n You Won it!`
            alert(result)
            let playAgain = confirm('Play Again?')
            playAgain ? location.reload() : alert('Thanks for playing!')
        }else{
            alert('Please enter valid Input')
        }
    }else{
        alert('I Guess you changed your mind')
    }
}else{
    alert('Ok, May be next time')
}
