import React from 'react'
const calculateWinner = (squares) => {  
    const lines = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
}
const Square = ({ value, onClick }) => {
    return (
        <button onClick={onClick} className='w-16 h-16 sm:h-20 sm:h-20 bg-white text-3xl font-bold border-2 border-gray-400 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-gray-600'>
            {value}
        </button>
    );
}
export const TicTacToe = () => {
    const [board, setBoard] = React.useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = React.useState(true);
    const winner = calculateWinner(board);
    const isDraw = !winner && board.every(Boolean);

    const handleClick = (index) => {
        if (board[index] || winner) {
            return;}
        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    }
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    }
    const status = winner ? `Winner: ${winner}` : isDraw ? 'Draw!' : `Next player: ${isXNext ? 'X' : 'O'}`;

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-orange-300' >
            <h1 className='text-4xl font-bold mb-4 text-gray-800'>Tic-Tac-Toe</h1>
            <div className='text-xl font-medium text-gray-600'>{status}</div>
            <div className='grid grid-cols-3 gap-1 mb-6' >
                {
                    board.map((value, index) => (
                        <Square 
                            key={index} 
                            value={value} 
                            onClick={() => {
                                if (!value && !calculateWinner(board)) {
                                    const newBoard = board.slice();
                                    newBoard[index] = isXNext ? 'X' : 'O';
                                    setBoard(newBoard);
                                    setIsXNext(!isXNext);
                                }
                            }} 
                        />
                    ))
                }
            </div>
            {
                winner || isDraw ? (
                    <button onClick={resetGame} className='px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300'>
                        Reset Game
                    </button>
                ) : (
                    <div className='text-lg font-semibold text-gray-700'>Current Player: {isXNext ? 'X' : 'O'}</div>
                )
            }
        </div>
    )
    
}
