//Module for the gameboard
let gameboard = (function() {

    let gameboard = new Array(9);
    gameboard = ["","","","","","","","",""]

    const boxes = document.getElementsByClassName("box")

    const isFullBoard = () => {
        for (let i = 0; i < 9; i++) {
            if (gameboard[i] === "") return false
        }
        return true
    }

    const checkWinner = () => {
        if (checkRowWin() || checkColumnWin() || checkDiagonalWin()) {
            return true
        }
        return false
    }

    const checkRowWin = () => {
        if ((gameboard[0] === gameboard[1] && gameboard[1] === gameboard[2] && gameboard[2] === "X") || 
                (gameboard[3] === gameboard[4] && gameboard[4] === gameboard[5] && gameboard[5] === "X") || 
                (gameboard[6] === gameboard[7] && gameboard[7] === gameboard[8] && gameboard[8] === "X")) {
            console.log("Player Wins")
            return true
        } else if ((gameboard[0] === gameboard[1] && gameboard[1] === gameboard[2] && gameboard[2] === "O") || 
            (gameboard[3] === gameboard[4] && gameboard[4] === gameboard[5] && gameboard[5] === "O") || 
            (gameboard[6] === gameboard[7] && gameboard[7] === gameboard[8] && gameboard[8] === "O")) {
            console.log("AI Wins")
            return true
        } else return false
    }

    const checkColumnWin = () => {
        if ((gameboard[0] === gameboard[3] && gameboard[3] === gameboard[6] && gameboard[6] === "X") || 
                (gameboard[1] === gameboard[4] && gameboard[4] === gameboard[7] && gameboard[7] === "X") || 
                (gameboard[2] === gameboard[5] && gameboard[5] === gameboard[8] && gameboard[8] === "X")) {
            console.log("Player Wins")
            return true
        } else if ((gameboard[0] === gameboard[3] && gameboard[3] === gameboard[6] && gameboard[6] === "O") || 
                (gameboard[1] === gameboard[4] && gameboard[4] === gameboard[7] && gameboard[7] === "O") || 
                (gameboard[2] === gameboard[5] && gameboard[5] === gameboard[8] && gameboard[8] === "O")) {
            console.log("AI Wins")
            return true
        } else return false
    }

    const checkDiagonalWin = () => {
        if ((gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8] && gameboard[8] === "X") || 
                (gameboard[2] === gameboard[4] && gameboard[4] === gameboard[6] && gameboard[6] === "X")) {
            console.log("Player Wins")
            return true
        } else if ((gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8] && gameboard[8] === "O") || 
            (gameboard[2] === gameboard[4] && gameboard[4] === gameboard[6] && gameboard[6] === "O")) {
            console.log("AI Wins")
            return true
        } else return false
    }
    
    const playSpot = (event) => {
        if (checkWinner()) return 
        const spot = event.target
        if (spot.textContent == "") {
            spot.textContent = "X"
            gameboard[spot.id.slice(4,5)] = "X"
        } else return
        if (checkWinner()) return 
        playSpotAI()
    }

    const playSpotAI = () => {
        if (isFullBoard()) return
        let index = Math.round(Math.random() * 9)
        while (gameboard[index] !== "" || gameboard[index] === "X") {
            index = Math.round(Math.random() * 9)
        }
        boxes[index].textContent = "O"
        gameboard[index] = "O" 
        if (checkWinner()) return 
    }

    for (let i = 0; i < 9; i++) {
        boxes[i].addEventListener("click", playSpot)
    }

    return {

    }
})()

//Module for the viewController
let viewController = (function() {

})()

//Factory for players
const playerFactory = (name) => {
    return { name }
}
