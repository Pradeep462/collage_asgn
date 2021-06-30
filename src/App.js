
import './App.css';
import Home from './Home';
import React, { useEffect, useState } from 'react';


function App() {

  const [clickedImg, setClickedImg] = useState({});




  return (
    <div className="App">
      <Home clickedImg={clickedImg} setClickedImg={setClickedImg} />


    </div>
  );
}

export default App;
