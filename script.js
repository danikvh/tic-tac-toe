//Module for the gameboard
let gameboard = (function() {

    let gameboard = new Array(9);
    gameboard = ["","","","","","","","",""]
    let playerMark = "X"
    let winner = ""
    let gameMode = "AI"
    const boxes = document.getElementsByClassName("box")
    const gameButton = document.getElementById("new-game-button")
    const modeAI = document.getElementById("ai-game-mode")
    const modeHuman = document.getElementById("human-game-mode")

    const isFullBoard = () => {
        for (let i = 0; i < 9; i++) {
            if (gameboard[i] === "") return false
        }
        return true
    }

    const resetBoard = () => {
        for (let i = 0; i < 9; i++) {
            gameboard[i] = ""
            boxes[i].textContent = ""
        }
        playerMark = "X"
        gameButton.disabled = true;
    }

    const selectGameMode = () => {
        if (modeAI.checked === true) gameMode = "AI"
        else gameMode = "Human"
    }

    const checkWinner = () => {
        let res = winner
        winner = ""
        return res
    }

    const checkWin = () => {
        if (checkRowWin() || checkColumnWin() || checkDiagonalWin() || checkTie()) {
            viewController.gameFinish()
            gameButton.disabled = false;
            return true
        }
        return false
    }

    let checkRowWin = () => {
        if ((gameboard[0] === gameboard[1] && gameboard[1] === gameboard[2] && gameboard[2] === "X") || 
                (gameboard[3] === gameboard[4] && gameboard[4] === gameboard[5] && gameboard[5] === "X") || 
                (gameboard[6] === gameboard[7] && gameboard[7] === gameboard[8] && gameboard[8] === "X")) {
            winner = "player1"
            return true
        } else if ((gameboard[0] === gameboard[1] && gameboard[1] === gameboard[2] && gameboard[2] === "O") || 
            (gameboard[3] === gameboard[4] && gameboard[4] === gameboard[5] && gameboard[5] === "O") || 
            (gameboard[6] === gameboard[7] && gameboard[7] === gameboard[8] && gameboard[8] === "O")) {
            winner = "player2"
            return true
        } else return false
    }

    let checkColumnWin = () => {
        if ((gameboard[0] === gameboard[3] && gameboard[3] === gameboard[6] && gameboard[6] === "X") || 
                (gameboard[1] === gameboard[4] && gameboard[4] === gameboard[7] && gameboard[7] === "X") || 
                (gameboard[2] === gameboard[5] && gameboard[5] === gameboard[8] && gameboard[8] === "X")) {
            winner = "player1"
            return true
        } else if ((gameboard[0] === gameboard[3] && gameboard[3] === gameboard[6] && gameboard[6] === "O") || 
                (gameboard[1] === gameboard[4] && gameboard[4] === gameboard[7] && gameboard[7] === "O") || 
                (gameboard[2] === gameboard[5] && gameboard[5] === gameboard[8] && gameboard[8] === "O")) {
            winner = "player2"
            return true
        } else return false
    }

    let checkDiagonalWin = () => {
        if ((gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8] && gameboard[8] === "X") || 
                (gameboard[2] === gameboard[4] && gameboard[4] === gameboard[6] && gameboard[6] === "X")) {
            winner = "player1"
            return true     
        } else if ((gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8] && gameboard[8] === "O") || 
                (gameboard[2] === gameboard[4] && gameboard[4] === gameboard[6] && gameboard[6] === "O")) {
            winner = "player2"
            return true
        } else return false
    }

    let checkTie= () => {
        for (let i = 0; i < 9; i++) {
            if (gameboard[i] === "") return false
        }
        winner = "tie"
        return true;
    }
    
    const playSpot = (event) => {
        if (winner !== "") return 
        const spot = event.target
        if (spot.textContent == "") {
            spot.textContent = playerMark
            gameboard[spot.id.slice(4,5)] = playerMark
        } else return
        if (checkWin()) return 

        if (gameMode === "AI") playSpotAI()
        else {
            if (playerMark === "X") playerMark = "O"
            else playerMark = "X"
        }
    }

    const playSpotAI = () => {
        if (isFullBoard()) return
        let index = Math.round(Math.random() * 9)
        while (gameboard[index] !== "" || gameboard[index] === "X") {
            index = Math.round(Math.random() * 9)
        }
        boxes[index].textContent = "O"
        gameboard[index] = "O" 
        if (checkWin()) return 
    }


    for (let i = 0; i < 9; i++) {
        boxes[i].addEventListener("click", playSpot)
    }

    gameButton.addEventListener("click", resetBoard)
    modeAI.addEventListener("click", selectGameMode)
    modeHuman.addEventListener("click", selectGameMode)

    return {
        checkWin,
        checkWinner
    }
})()

//Module for the viewController
let viewController = (function() {

    const player1Score = document.getElementById("player1-score")
    const player2Score = document.getElementById("player2-score")


    //Called by gameboard.checkWin()
    let gameFinish = () => {
        let winner = gameboard.checkWinner()
        if (winner == "player1") player1Score.textContent++
        else if (winner == "player2") player2Score.textContent++
    }

    return {
        gameFinish
    }

})()

//Factory for players
const playerFactory = (name) => {
    return { name }
}
