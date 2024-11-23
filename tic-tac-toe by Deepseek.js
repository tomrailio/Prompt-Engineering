// https://www.deepseek.com/

A Chinese lab has unveiled what appears to be one of the first “reasoning” AI models to rival OpenAI’s o1.

DeepSeek, an AI research company funded by quantitative traders, released recently a preview of DeepSeek-R1, 
which the firm claims is a reasoning model competitive with o1.

Unlike most models, reasoning models effectively fact-check themselves by spending more time considering 
a question or query. This helps them avoid some of the pitfalls that normally trip up models.

Similar to o1, DeepSeek-R1 reasons through tasks, planning ahead, and performing a series of actions that 
help the model arrive at an answer. This can take a while. Like o1, depending on the complexity of the question, 
DeepSeek-R1 might “think” for TENS of seconds before answering.


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        .board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            gap: 5px;
        }
        .cell {
            width: 100px;
            height: 100px;
            background-color: #fff;
            border: 2px solid #000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
            cursor: pointer;
        }
        .message {
            margin-top: 20px;
            font-size: 1.5em;
        }
    </style>
</head>
<body>
    <div>
        <div class="board" id="board">
            <div class="cell" data-index="0"></div>
            <div class="cell" data-index="1"></div>
            <div class="cell" data-index="2"></div>
            <div class="cell" data-index="3"></div>
            <div class="cell" data-index="4"></div>
            <div class="cell" data-index="5"></div>
            <div class="cell" data-index="6"></div>
            <div class="cell" data-index="7"></div>
            <div class="cell" data-index="8"></div>
        </div>
        <div class="message" id="message"></div>
        <button id="reset">Reset Game</button>
    </div>

    <script>
        const board = document.getElementById('board');
        const cells = document.querySelectorAll('.cell');
        const message = document.getElementById('message');
        const resetButton = document.getElementById('reset');

        let currentPlayer = 'X';
        let gameState = ['', '', '', '', '', '', '', '', ''];
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        function checkWinner() {
            for (let combination of winningCombinations) {
                const [a, b, c] = combination;
                if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                    return gameState[a];
                }
            }
            if (!gameState.includes('')) {
                return 'draw';
            }
            return null;
        }

        function handleCellClick(event) {
            const index = event.target.getAttribute('data-index');
            if (gameState[index] === '' && !checkWinner()) {
                gameState[index] = currentPlayer;
                event.target.textContent = currentPlayer;
                const winner = checkWinner();
                if (winner) {
                    if (winner === 'draw') {
                        message.textContent = "It's a draw!";
                    } else {
                        message.textContent = `${winner} wins!`;
                    }
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        }

        function resetGame() {
            gameState = ['', '', '', '', '', '', '', '', ''];
            cells.forEach(cell => cell.textContent = '');
            message.textContent = '';
            currentPlayer = 'X';
        }

        cells.forEach(cell => cell.addEventListener('click', handleCellClick));
        resetButton.addEventListener('click', resetGame);
    </script>
</body>
</html>
