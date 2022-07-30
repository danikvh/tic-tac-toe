//Module for the gameboard
let gameboard = (function() {
    let gameboard = new Array(9);
    gameboard = ["X","","O","","X","","","",""]

    const drawBoard = () => {
        const htmlBoard = document.getElementsByClassName("answer")
        for (let i = 0; i < 9; i++) {
            htmlBoard[i].textContent = gameboard[i]
        }
    }

    return {
        drawBoard
    }
})()

//Module for the gameController
let gameController = (function() {

})()

//Factory for players
const playerFactory = (name) => {
    return { name }
}

gameboard.drawBoard()