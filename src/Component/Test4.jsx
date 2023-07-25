import React, { useContext } from 'react';
import { ColorD, DataS } from '../App';

export default function Test4() {
  const { data } = useContext(DataS);
  const { color, handleChange, handleBack,handleBack2,handleBack3,handleBack4 } = useContext(ColorD);

  return (
    <div style={{ backgroundColor: color, textAlign : "center", height : "100vh", display : 'flex', justifyContent : "center", alignItems : 'center' }}>
      {console.log(color)}
      <h1>{data}</h1>
      <button onClick={handleChange}>Blue</button>
      <button onClick={handleBack}>Red</button>
      <button onClick={handleBack2}>Green</button>
      <button onClick={handleBack3}>Orange</button>
      {/* <button onClick={handleBack4}>pink</button> */}
      {/* <button onClick={handleChange}>grey</button>
      <button onClick={handleChange}>pink</button>
          <button onClick={handleChange}>brown</button> */}
    </div>
  );
}
