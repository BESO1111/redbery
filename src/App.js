import { useState } from "react";
import "./App.css";
import Pages1 from "./pages/Pages1";

function App() {
  let [page, setpage] = useState(false);

  function henderClick() {
    setpage(true);
  }

  return (
    <div className="app">
     
     
     {page?<Pages1/> :  <div>
      <div>
        <img src="../photo/LOGO-02 3.png" alt="logo"></img>
      </div>

  
      <button onClick={()=>henderClick(page)} className="addResume">
        რეზიუმეს დამატება
      </button>
      </div>}
    </div>
  );
}

export default App;
