// player -- X O

// arr[9] --> [null,nul......]

// 0 1 2
// 3 4 5
// 6 7 8

// isPlaying: true/false


// player--> X
// arr -> Array(9).fill(null);
// isPlaying --> true


// click idx 4


// player-->O
// arr->[null,null,null,null,"X",null,null,null,null]
// isPlaying --> true


//click idx 0

// player-->X
// arr->["O",null,null,null,"X",null,null,null,null]
// isPlaying --> true

// UI = f(x)


import React,{useEffect, useState} from 'react'

function Square({value,idx,clickFn})
{
    const style ={
        width: "60px",
        height: "60px",
        backgroundColor: "lightgray",
        display: "inline-block",
        fontSize: "24px",
        border : "2px solid black"
    };

    function handleClick(){
        clickFn(idx);
    }
    

    return <button className="square" style={style} onClick={handleClick}> {value} </button>;
}

function TickTacToe() {

    const [player, setPlayer] = useState("X");
    const [arr, setArr] = useState(Array(9).fill(null));
    const [isPlaying, setIsPlaying] = useState(true);


    const gridstyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2px",
        width: "max-content"
    };

    function checkWin(){

        const patterns=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let i=0;i<8;i++)
        {
            const [a,b,c] = patterns[i];

            if(arr[a]===arr[b] && arr[b]===arr[c] && arr[a]!==null)
            {
                setIsPlaying(false);
                return;
            }
        }
    }

    function handleSquareClick(idx){
        if(!isPlaying)
        {
            alert("game ended");
            return;
        }

        if(arr[idx]!==null)
        {
            alert("already filled");
            return;

        }

        setPlayer(player === "X" ? "O" : "X");

        const newArr = [...arr];
        newArr[idx]=player;

        setArr(newArr);
    }
   
    if(isPlaying)
    checkWin();

  return (
    <div>
        <h1>{isPlaying?"":`Winner : ${player==="X"?"O":"X"}`}</h1>
      <h1>Tick Tac Toe</h1>
      <h2>Player: {player}</h2>
      <div style={gridstyle} >
        {
            arr.map(function(val,idx){
                return <Square value={val} idx={idx} clickFn={handleSquareClick}/>
            })
        }
      </div>
    </div>
  )
}

export default TickTacToe
