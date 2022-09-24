import "./App.css";
import React from "react";
import Box from "./components/Box";
import Boxdata from "./Boxdata.js";

function App() {
  const [square, setSquare] = React.useState(Boxdata);

  function toggle(id) {
    setSquare((preSquare)=>{

      //for loop
      // const newSquare = []
      // for(let i =0;i<preSquare.length;i++){
      //   const currentSquare = preSquare[i]
      //   if(currentSquare.id===id)
      //   {
      //     const updateSquare= {
      //       ...currentSquare,
      //       on: !currentSquare.on
      //     }
      //     newSquare.push(updateSquare)
      //   }
      //   else{
      //     newSquare.push(currentSquare)
      //   }
      // }
      // return newSquare

//by map 
    return preSquare.map((squares)=>{
       return  squares.id === id ? { ...squares,on: !squares.on} : squares
    })
    })


  }
  const squareElement = square.map((square) => (
    //<div className="box" key = {i} style={style}>
    //console.log(square.on)
    //</div>

    <Box key={square.id}
     on={square.on} 
    //  id={square.id} 
     toggle={()=>{toggle(square.id)}} />
     ));

  return (
  <div>
    {squareElement}
  </div>);
}

export default App;
