import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "./requests";


const Banner=({fetchURL})=>{

   const [movie, setMovie] = useState([]);


   useEffect(()=>{ // 
    async function fetchData(){
        const request =  await  axios.get(requests.fetchActionMovies); //fetch(`https://api.themoviedb.org/3/discover/movie?api_key=43eafacaa18cb599da684f2e10dab6e0&with_genres=28`).then((responce)=>{
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length) 
            ]);
           // console.log(request); 
            return request;         
    }
     fetchData();
   
},[]);

 //console.log(movie);  

    return(
     <header className="banner"
         style={{
             backgroundSize: "cover",
             backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
             backgroundPosition: "center center",
        }}
        >
       <div className="banner-contents">

           <h1>
               {movie?.title || movie?.name || movie?.original_name}
           </h1>
          
       </div>

     </header>

    );
}

export default Banner;