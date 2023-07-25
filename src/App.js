import React, { createContext, useState } from "react";
import "./App.css";
import Test4 from "./Component/Test4";

const DataS = createContext();
const ColorD = createContext();
function App() {
  const [data, setData] = useState("Red")
  const [color, setColor] = useState("red")
  function handleChange() {
    setColor("blue");
    setData("Blue")
  }
  function handleBack() {
    setColor("red")
    setData("Red")
  }
  
  function handleBack2() {
    setColor("green")
    setData("Green")
  }
  
  function handleBack3() {
    setColor("orange")
    setData("Orange")
  }
  
  function handleBack4() {
    setColor("pink")
    setData("Pink")
  }
  return (
    <div>
      <ColorD.Provider value={{ color, handleChange, handleBack,handleBack2,handleBack3 }}>
        <DataS.Provider value={{ data }}>
          <div className="con">
            <Test4 />
          </div>
        </DataS.Provider>
      </ColorD.Provider>
    </div>
  );
}

export default App;
export { DataS, ColorD };
