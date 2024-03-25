
import './App.css';
import Square from './Square';
import React , {useState,useEffect} from 'react';

const initial=["", "","","","","","","",""];
function App() {

const[game, setGame]=useState(initial);
const[isXChange, setIsXChange]=useState(false);

const onSquareClicked = (index) =>{
let strings=Array.from(game);

if(strings[index])
  return;
strings[index]=isXChange ? "X" : "O";
setIsXChange(!isXChange);
setGame(strings);

}

useEffect(() => {
  const winner = checkWinner();
  if (winner !== null) {
    setTimeout(() => {
      alert(`${winner} Player Won the Game!`);
    }, 500);
  }
}, [game]);

const checkWinner = () =>{
const directions =[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];

for(let i =0 ; i<directions.length; i++){
  const[a,b,c]= directions[i];
  if(game[a]&& game[a] === game[b]&& game[b]===game[c] && game[a]!=='')
    {
    return game[a];
  }
 
}
return null;
}

  return <>
  <div className="app-header">
  <h1 className='heading-text'>Tic Tac Toe</h1>
 
 
<div className='row jc-center'>
  <Square className="b-bottom-right" state={game[0]} onClick={()=> onSquareClicked(0)}/>
  <Square className="b-bottom-right" state={game[1]} onClick={()=> onSquareClicked(1)}/>
  <Square className="b-bottom"state={game[2]} onClick={()=> onSquareClicked(2)}/>

</div>

<div  className='row jc-center'>
<Square className="b-bottom-right"state={game[3]} onClick={()=> onSquareClicked(3)}/>
<Square className="b-bottom-right"state={game[4]} onClick={()=> onSquareClicked(4)}/>
<Square className="b-bottom"state={game[5]} onClick={()=> onSquareClicked(5)}/>


</div>

<div className='row jc-center'>
<Square className="b-right"state={game[6]} onClick={()=> onSquareClicked(6)}/>
<Square className="b-right"state={game[7]} onClick={()=> onSquareClicked(7)}/>
<Square state={game[8]} onClick={()=> onSquareClicked(8)}/>
</div>
<button className='clear-btn' onClick={()=>setGame(initial)} >Clear Game</button>
</div>

 </>
}

export default App;

















 
