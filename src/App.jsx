import React, {useState} from "react";
import Board from "./Components/Board";
import History from "./Components/History";
import { calculateWinner } from "./helpers";

import "./Styles/root.scss"; 

 export default () => {

  const [history, setHistory] = useState([ {board: Array(9).fill(null), isXNext : true},
  ]);
  const [curentMove, setCurrentmove] = useState(0);

  const current = history[curentMove];
  
  const winner = calculateWinner(current.board);

  const message = winner ? `Winner is ${winner}`
   : `Next player is ${current.isXNext ? 'X' : 'O'}`

    const handleSquareClick = position => {
      if (current.board[position] || winner){
        return;
      }

      setHistory(prev => {
      const last = prev[prev.length - 1 ];

        const newBoard = last.board.map((square, pos) => {
          if (pos === position){
            return last.isXNext ? 'X' : '0';
          }
          return square; 
        });

        return prev.concat({board : newBoard, isXNext: !last.isXNext});
      });
      
      setCurrentmove(prev => prev + 1);
    };

    const moveTo = (move) => {
     setCurrentmove(move);

    };

    return(

  <div className="app" >
    <h1>TIC TAC TOE!</h1>
    <h2>{message}</h2>
    <Board board={current.board} handleSquareClick = {handleSquareClick}/>
    <History history={history} moveTo={moveTo} currentMove={curentMove}/>
  </div>
  );
 }

  

