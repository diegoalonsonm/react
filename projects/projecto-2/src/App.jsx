import './App.css'
import {useState} from "react";
import confetti from "canvas-confetti"
import {Square} from "./components/Square.jsx";
import {turns, winner_combos} from "./constants.js";
import {WinnerModal} from "./components/Winner.jsx";
import {Board} from "./components/Board.jsx";

function App() {
  const [board, setBoard] = useState( () => {
      const boardFromStorage = window.localStorage.getItem('board')
      return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState( () => {
      const turnFromStorage = window.localStorage.getItem('turn')
      return turnFromStorage ?? turns.X
  })
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
      for (const combo of winner_combos) {
          const [a,b,c] = combo
          if (
              boardToCheck[a] &&
              boardToCheck[a] === boardToCheck[b] &&
              boardToCheck[a] === boardToCheck[c]
          ) {
              return boardToCheck[a]
          }
      }
      return null
  }
  const resetGame = () => {
      setBoard(Array(9).fill(null))
      setTurn(turns.X)
      setWinner(null)
  }

  const checkEndGame = (newBoard) => {
      return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
      if (board[index] || winner) return

      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)

      const newTurn = turn === turns.X ? turns.O : turns.X
      setTurn(newTurn)

      window.localStorage.setItem('board', JSON.stringify(newBoard))
      window.localStorage.setItem('turn', newTurn)

      const newWinner = checkWinner(newBoard)
      if (newWinner) {
          confetti()
          setWinner(newWinner)
      } else if (checkEndGame(newBoard)) {
          setWinner(false)
      }
    }

  return (
      <main className="board">
          <h1>Tic Tac Toe</h1>
          <button onClick={resetGame}>Reset</button>
          <Board updateBoard={updateBoard} board={board}/>
          <section className="turn">
              <Square isSelected={turn === turns.X}>
                  {turns.X}
              </Square>
              <Square isSelected={turn === turns.O}>
                  {turns.O}
              </Square>
          </section>
          <WinnerModal resetGame={resetGame} winner={winner}/>
      </main>
  )
}

export default App
