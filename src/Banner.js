import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "./requests";


const Banner=()=>{

   const [movie, setMovie] = useState( [] );


   useEffect(()=>{ // 
    async function fetchData(){
        const request =  await  axios.get(requests.fetchActionMovies); //fetch(`https://api.themoviedb.org/3/movie/550?api_key=e0b07ffc884de8b4da0f02dbb9a478a9`).then((responce)=>{
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);
            return request;         
    }
     fetchData();
   
},[]);

 console.log(movie);  

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