
import './App.css';
import Home from './Home';
import React, { useEffect, useState } from 'react';

function App() {

  const [clickedImg , setClickedImg] = useState({});

  console.log(clickedImg);

  return (
    <div className="App">

    <Home clickedImg={clickedImg} setClickedImg={setClickedImg}/>

      {/* {Nav}
      <Banner  />
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchActionMovies} isLargeRow/>

      <Row title="Traending Movies"  fetchURL={requests.fetchTrendingMovies}/>
      <Row title="Top Rated"  fetchURL={requests.fetchTopRated}/> 
      <Row title="Comedy Movie"  fetchURL={requests.fetchComedyMovies}/>
      <Row title="Action Movies"  fetchURL={requests.fetchActionMovies}/> 
      <Row title="Romance Movies"  fetchURL={requests.fetchRomanceMovies} />
        */}
             

    </div>
  );
}

export default App;
