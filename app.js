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
                    globalVariables.gameOverBox.innerText = 'Congrats, you have completed a game! \nPlayer 1 won the game, and Player 2 lost the game.';
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
                    globalVariables.gameOverBox.innerText = 'Congrats, you have completed a game! \nPlayer 2 won the game, and Player 1 lost the game.';
                } else if (gameboardArray[0].innerText && gameboardArray[1].innerText && gameboardArray[2].innerText && gameboardArray[3].innerText && gameboardArray[4].innerText && gameboardArray[5].innerText && gameboardArray[6].innerText && gameboardArray[7].innerText && gameboardArray[8].innerText !== ''){
                    squareDiv.removeEventListener('click', markSquare);
                    globalVariables.gameOverBox.innerText = 'Congrats, you have completed a game! However, both players tied!';
                }
                
                container.appendChild(globalVariables.gameOverBox);
            }

            function markSquare() {
            if (globalVariables.gameOverBox.innerText !== '') {
                squareDiv.removeEventListener('click', markSquare);
            } else {
                if (squareDiv.innerText !== '') {
                    console.log('That square is already marked, please choose another.');
                } else {
                    if (globalVariables.turnCounter % 2 === 0) {
                        squareDiv.innerText = 'X';
                        console.log('This square has been marked with X!');
                        //gameboardArray.push(squareDiv.innerText);
                        globalVariables.turnCounter ++;
                    } else if (globalVariables.turnCounter % 2 === 1) {
                        squareDiv.innerText = 'O';
                        console.log('This square has been marked with O!');
                        //gameboardArray.push(squareDiv.innerText);
                        globalVariables.turnCounter ++;
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
    }
    
    return {
        gameboardDisplay, resetGame, container, gameboardArray, gridContainer, 
    };
})();

const globalVariables = (() => {
    let player1InfoField = document.getElementById('player1InfoField');
    let player2InfoField = document.getElementById('player2InfoField');
    let turnCounter = 0;
    
    let gameOverBox = document.createElement('div');
    gameOverBox.setAttribute('id', 'gameOverBox');

    let startButton = document.getElementById('startButton');
    let resetButton = document.getElementById('resetButton');

    function setPlayerNames() {
        let player1Name = document.getElementById('player1Name').value;
        let player2Name = document.getElementById('player2Name').value;
    
        player1NameDisplay.innerText = "Player 1: " + player1Name;
        player2NameDisplay.innerText = "Player 2: " + player2Name;
    
    }

    startButton.addEventListener('click',() => {
        if (player1Name.value === '' || player2Name.value === '') {
            alert('Please enter a name for both players');
        } else {
            player1NameDisplay.innerText -= player1Name;
            player2NameDisplay.innerText -= player2Name;
    
            gameboard.gridContainer.innerHTML = '';
            gameboard.gameboardArray.length = 0;
            globalVariables.turnCounter = 0;
            gameOverBox.innerText = '';
            gameboard.gameboardDisplay();
            setPlayerNames();
    
            player1InfoField.style.display = 'none';
            player2InfoField.style.display = 'none';
            player1NameDisplay.style.display = 'block';
            player2NameDisplay.style.display = 'block';
        }
    });

    resetButton.addEventListener('click', gameboard.resetGame)

    return {
        player1InfoField, player2InfoField, turnCounter, gameOverBox, startButton, resetButton, 
    };
})();