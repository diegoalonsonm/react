import './App.css'
import {useState} from "react";

const turns = {
    X: 'x',
    O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handleClick = () => {
        updateBoard(index)
    }
    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}

const winner_combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(turns.X)
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

      const newWinner = checkWinner(newBoard)
      if (newWinner) {
          setWinner(newWinner)
      } else if (checkEndGame(newBoard)) {
          setWinner(false)
      }
    }

  return (
      <main className="board">
          <h1>Tic Tac Toe</h1>
          <button onClick={resetGame}>Reset</button>
          <section className="game">
              {
                  board.map((_, index) => {
                      return (
                          <Square key={index} index={index} updateBoard={updateBoard}>
                              {board[index]}
                          </Square>
                      )
                  })
              }
          </section>
          <section className="turn">
              <Square isSelected={turn === turns.X}>
                  {turns.X}
              </Square>
              <Square isSelected={turn === turns.O}>
                  {turns.O}
              </Square>
          </section>
          {
              winner !== null && (
                  <section className="winner">
                      <div className="text">
                          <h2>
                              {
                                  winner === false ? 'Empate' : 'Ganó'
                              }
                          </h2>
                          <header className="win">
                              {winner && <Square>{winner}</Square>}
                          </header>
                          <footer>
                              <button onClick={resetGame}>empezar de nuevo</button>
                          </footer>
                      </div>
                  </section>
              )
          }
      </main>
  )
}

export default App
