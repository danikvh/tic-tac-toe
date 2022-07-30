//Module for the gameboard
let gameboard = (function() {

    let gameboard = new Array(9);
    gameboard = ["","","","","","","","",""]

    //let playerTurn = true

    const boxes = document.getElementsByClassName("box")


    const drawBoard = () => {
        for (let i = 0; i < 9; i++) {
            boxes[i].textContent = gameboard[i]
        }
    }

    const isFullBoard = () => {
        for (let i = 0; i < 9; i++) {
            if (gameboard[i] === "") return false
        }
        return true
    }
    
    const playSpot = (event) => {
        const spot = event.target
        if (spot.textContent == "") {
            spot.textContent = "X"
            gameboard[spot.id.slice(4,5)] = "X"
        }
        //playerTurn = false
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
        //playerTurn = true
    }

    for (let i = 0; i < 9; i++) {
        boxes[i].addEventListener("click", playSpot)
    }

    return {
        drawBoard
    }
})()

//Module for the viewController
let viewController = (function() {
    
})()

//Factory for players
const playerFactory = (name) => {
    return { name }
}

gameboard.drawBoard()