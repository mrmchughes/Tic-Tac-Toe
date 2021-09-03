let gameboardArray = new Array(9);

const gameboard = (() => {
    function gameboardDisplay() {
        let container = document.getElementById('gameboardContainer');
        container.innerHTML = '';
                
        for (let i = 0; i < gameboardArray.length; i++) {
            let square = gameboardArray[i];
            
            let squareDiv = document.createElement('div');
            squareDiv.setAttribute('class', 'squareDivClass');

            let squareText = document.createElement('p');
            squareText.setAttribute('class', 'squareTextClass');
            squareText.innerText = '';

            let selectionButton = document.createElement('button');
            selectionButton.setAttribute('type', 'button');
            selectionButton.setAttribute('class', 'selectionButtonClass');
            selectionButton.textContent = 'Click to select this square'
            
            console.log('Test for loop, if you see me that is a good thing!')

            selectionButton.addEventListener('click', markSquare);

            function markSquare() {
                if (squareText.innerText === '') {
                    squareText.innerText = 'X';
                    console.log('This square has been marked!');
                } else {
                    console.log('That square is already marked, please choose another.');
                    //console.log(`${}`) 
                }  
                    
                //mark clicked square with buttonValue
            };

            squareDiv.appendChild(squareText);
            squareDiv.appendChild(selectionButton);
            container.appendChild(squareDiv);
        }
    };

    return {
        gameboardDisplay,
    };
})();

//runs gameboard on load
window.addEventListener('load', gameboard.gameboardDisplay);
//document.getElementById('testButton').addEventListener('click', gameboard.gameboardDisplay);

const Player = (name, buttonValue) => {
    const getName = () => name;

    const getButtonValue = () => buttonValue;

    return {getName, getButtonValue, };
};

const testGuy = Player('testGuy', 'Test Guy');

const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');

//for testing purposes