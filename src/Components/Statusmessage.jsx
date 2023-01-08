import React from 'react'

const Statusmessage = ({winner, current}) => {
    const noMovesleft = current.board.every(el => el !== null);


  return( 
  <div className='status-message'>
    {winner && (
      <>
      Winner is{' '}
      <span className={winner === 'X' ? 'text-orange' : 'text-green'}>
        {winner}
      </span>
      </>
    )}
    {!winner && !noMovesleft &&(
    <>
     Next player is {' '}
     <span className={current.isXNext ? 'text-orange' : 'text-green'}>
      {current.isXNext ? 'X' : 'O'}{' '}
      </span>
     </>
     )}
     {!winner && noMovesleft && (
       <>
     <span className='text-orange'>X</span> and {' '}
     <span className='text-green'>O</span> Tied
     </>
  )}
  </div>
  );
};

export default Statusmessage
