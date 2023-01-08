import React, {useState} from "react";
import Board from "./Components/Board";
import History from "./Components/History";
import { calculateWinner } from "./helpers";
import Statusmessage from "./Components/Statusmessage";
import "./Styles/root.scss"; 

const NEW_GAME = [
   {board: Array(9).fill(null), isXNext : true},
];

 export default () => {

  const [history, setHistory] = useState(NEW_GAME);
  const [curentMove, setCurrentmove] = useState(0);

  const current = history[curentMove];
  
  const { winner, winningSquares } = calculateWinner(current.board);

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
    const onNewgame = () => {
      setHistory(NEW_GAME);
      setCurrentmove(0);
    };

    return(

  <div className="app" >
    <h1>TIC TAC TOE!</h1>
    <Statusmessage winner={winner} current={current} />
    <Board board={current.board} handleSquareClick = {handleSquareClick} winningSquares = {winningSquares}/>
    <button type="button" onClick={onNewgame}>Start New game</button>
    <History history={history} moveTo={moveTo} currentMove={curentMove}/>
  </div>
  );
 }

  

