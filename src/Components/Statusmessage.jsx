import React from 'react'

const Statusmessage = ({winner, current}) => {
    const noMovesleft = current.board.every(el => el !== null);
  return( 
  <h2>
    {winner && `Winner is ${winner}`}
    {!winner &&
    !noMovesleft &&
     `Next player is ${current.isXNext ? 'X' : 'O'}`}
     {!winner && noMovesleft && 'X and O Tied'}
  </h2>
  );
};

export default Statusmessage
