let player1InfoField = document.getElementById('player1InfoField');
let player2InfoField = document.getElementById('player2InfoField');

let turnCounter = 0;

let gameOverBox = document.createElement('div');

const gameboard = (() => {
    let gameboardArray = new Array(9);

    let container = document.getElementById('gameboardContainer');
    container.innerHTML = '';

    let gridContainer = document.createElement('div');
    gridContainer.setAttribute('id', 'gridContainer');

    function gameboardDisplay() {
                        
        for (let i = 0; i < 9; i++) {            
            let squareDiv = document.createElement('div');
            squareDiv.setAttribute('class', 'squareDivClass');
            squareDiv.innerText = '';
            
            console.log('Test for loop, if you see me that is a good thing!')

            gameboardArray.push(squareDiv);

            squareDiv.addEventListener('click', markSquare);
            squareDiv.addEventListener('click', gameOver);

            function gameOver() {
    
                if (gameboardArray[0].innerText == 'X' && gameboardArray[1].innerText == 'X' && gameboardArray[2].innerText == 'X' 
                || gameboardArray[0].innerText == 'X' && gameboardArray[4].innerText == 'X' && gameboardArray[8].innerText == 'X' 
                || gameboardArray[0].innerText == 'X' && gameboardArray[3].innerText == 'X' && gameboardArray[6].innerText == 'X' 
                || gameboardArray[3].innerText == 'X' && gameboardArray[4].innerText == 'X' && gameboardArray[5].innerText == 'X' 
                || gameboardArray[6].innerText == 'X' && gameboardArray[3].innerText == 'X' && gameboardArray[0].innerText == 'X' 
                || gameboardArray[6].innerText == 'X' && gameboardArray[4].innerText == 'X' && gameboardArray[2].innerText == 'X' 
                || gameboardArray[6].innerText == 'X' && gameboardArray[7].innerText == 'X' && gameboardArray[8].innerText == 'X' 
                || gameboardArray[1].innerText == 'X' && gameboardArray[4].innerText == 'X' && gameboardArray[7].innerText == 'X' 
                || gameboardArray[2].innerText == 'X' && gameboardArray[4].innerText == 'X' && gameboardArray[6].innerText == 'X' 
                || gameboardArray[2].innerText == 'X' && gameboardArray[1].innerText == 'X' && gameboardArray[0].innerText == 'X' 
                || gameboardArray[2].innerText == 'X' && gameboardArray[5].innerText == 'X' && gameboardArray[8].innerText == 'X' 
                || gameboardArray[5].innerText == 'X' && gameboardArray[4].innerText == 'X' && gameboardArray[3].innerText == 'X' 
                || gameboardArray[8].innerText == 'X' && gameboardArray[4].innerText == 'X' && gameboardArray[0].innerText == 'X' 
                || gameboardArray[8].innerText == 'X' && gameboardArray[5].innerText == 'X' && gameboardArray[2].innerText == 'X' 
                || gameboardArray[8].innerText == 'X' && gameboardArray[7].innerText == 'X' && gameboardArray[6].innerText == 'X') {
                    squareDiv.removeEventListener('click', markSquare);
                    gameOverBox.innerText = 'Congrats, you have completed a game! Player 1 won the game, and Player 2 lost the game.';
                } else if (gameboardArray[0].innerText == 'O' && gameboardArray[1].innerText == 'O' && gameboardArray[2].innerText == 'O' 
                || gameboardArray[0].innerText == 'O' && gameboardArray[4].innerText == 'O' && gameboardArray[8].innerText == 'O' 
                || gameboardArray[0].innerText == 'O' && gameboardArray[3].innerText == 'O' && gameboardArray[6].innerText == 'O' 
                || gameboardArray[3].innerText == 'O' && gameboardArray[4].innerText == 'O' && gameboardArray[5].innerText == 'O' 
                || gameboardArray[6].innerText == 'O' && gameboardArray[3].innerText == 'O' && gameboardArray[0].innerText == 'O' 
                || gameboardArray[6].innerText == 'O' && gameboardArray[4].innerText == 'O' && gameboardArray[2].innerText == 'O' 
                || gameboardArray[6].innerText == 'O' && gameboardArray[7].innerText == 'O' && gameboardArray[8].innerText == 'O' 
                || gameboardArray[1].innerText == 'O' && gameboardArray[4].innerText == 'O' && gameboardArray[7].innerText == 'O' 
                || gameboardArray[2].innerText == 'O' && gameboardArray[4].innerText == 'O' && gameboardArray[6].innerText == 'O' 
                || gameboardArray[2].innerText == 'O' && gameboardArray[1].innerText == 'O' && gameboardArray[0].innerText == 'O' 
                || gameboardArray[2].innerText == 'O' && gameboardArray[5].innerText == 'O' && gameboardArray[8].innerText == 'O' 
                || gameboardArray[5].innerText == 'O' && gameboardArray[4].innerText == 'O' && gameboardArray[3].innerText == 'O' 
                || gameboardArray[8].innerText == 'O' && gameboardArray[4].innerText == 'O' && gameboardArray[0].innerText == 'O' 
                || gameboardArray[8].innerText == 'O' && gameboardArray[5].innerText == 'O' && gameboardArray[2].innerText == 'O' 
                || gameboardArray[8].innerText == 'O' && gameboardArray[7].innerText == 'O' && gameboardArray[6].innerText == 'O') {
                    squareDiv.removeEventListener('click', markSquare);
                    gameOverBox.innerText = 'Congrats, you have completed a game! Player 2 won the game, and Player 1 lost the game.';
                } else if (gameboardArray[0].innerText && gameboardArray[1].innerText && gameboardArray[2].innerText && gameboardArray[3].innerText && gameboardArray[4].innerText && gameboardArray[5].innerText && gameboardArray[6].innerText && gameboardArray[7].innerText && gameboardArray[8].innerText !== ''){
                    squareDiv.removeEventListener('click', markSquare);
                    gameOverBox.innerText = 'Congrats, you have completed a game! However, both players tied!';
                }
                
                container.appendChild(gameOverBox);
            }

            function markSquare() {
            if (gameOverBox.innerText !== '') {
                squareDiv.removeEventListener('click', markSquare);
            } else {
                if (squareDiv.innerText !== '') {
                    console.log('That square is already marked, please choose another.');
                } else {
                    if (turnCounter % 2 === 0) {
                        squareDiv.innerText = 'X';
                        console.log('This square has been marked with X!');
                        //gameboardArray.push(squareDiv.innerText);
                        turnCounter += 1;
                    } else if (turnCounter % 2 === 1) {
                        squareDiv.innerText = 'O';
                        console.log('This square has been marked with O!');
                        //gameboardArray.push(squareDiv.innerText);
                        turnCounter += 1;
                    }
                }
            }   
                  
            };

            gridContainer.appendChild(squareDiv);
            container.appendChild(gridContainer);
        }
    };

    function resetGame() {
        player1InfoField.style.display = 'block';
        player2InfoField.style.display = 'block';

        player1NameDisplay.style.display = 'none'
        player1NameDisplay.innerText = 'Player 1: ';

        player2NameDisplay.style.display = 'none'
        player2NameDisplay.innerText = 'Player 2: ';

        let player1Name = document.getElementById('player1Name').value;
        let player2Name = document.getElementById('player2Name').value;

        console.log("I am resetGame. player1Name is: " + player1Name + ", player2Name is: " + player2Name)
    }
    
    return {
        gameboardDisplay, resetGame, container, gameboardArray, gridContainer, 
    };
})();

//runs gameboard on click
let startButton = document.getElementById('startButton');
startButton.addEventListener('click',() => {
    if (player1Name.value === '' || player2Name.value === '') {
        alert('Please enter a name for both players');
    } else {
        player1NameDisplay.innerText -= player1Name;
        player2NameDisplay.innerText -= player2Name;

        gameboard.gridContainer.innerHTML = '';
        gameboard.gameboardArray.length = 0;
        turnCounter = 0;
        gameOverBox.innerText = '';
        gameboard.gameboardDisplay();
        setPlayerNames();

        player1InfoField.style.display = 'none';
        player2InfoField.style.display = 'none';
        player1NameDisplay.style.display = 'block';
        player2NameDisplay.style.display = 'block';
    }
});

let resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', gameboard.resetGame)

const Player = (name) => {
    const getName = () => name;

    return {getName, name};
};

function setPlayerNames() {
    console.log('I am setPlayerNames and I am working!')

    let player1Name = document.getElementById('player1Name').value;
    let player2Name = document.getElementById('player2Name').value;

    const player1 = Player(player1Name);
    const player2 = Player(player2Name);

    console.log("Player 1: " + player1.name);
    console.log("Player 2: " + player2.name);

    player1NameDisplay.innerText = "Player 1: " + player1Name;
    player2NameDisplay.innerText = "Player 2: " + player2Name;

    console.log("I am player1NameDisplay: " + player1NameDisplay);
    console.log("I am player2NameDisplay: " + player2NameDisplay);
}

function gameOver() {
    let gameboardArray = gameboard.gameboardArray;
    //TextBox = The game was a tie! || Player 1 won the game! || Player 2 won the game!

    
    //const gameOverVariable = (div) => div.innerText = '';
    
    //function gameOverCheck() {
        //return [i] === '';
    //}
    if (gameboardArray[0].innerText && gameboardArray[1].innerText && gameboardArray[2].innerText && gameboardArray[3].innerText && gameboardArray[4].innerText && gameboardArray[5].innerText && gameboardArray[6].innerText && gameboardArray[7].innerText && gameboardArray[8].innerText !== ''){
        alert('You have completed a game!')
    }
    
    
    //if (gameOverVariable = false) {
        //alert("You did it! The array is full!");
    //}

    //if tie
    //if player1 won
    //if player2 won
}