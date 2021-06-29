import React, { useEffect, useState } from 'react';

import "./Row.css";


const Row=({title , data , clickedImg,  setClickedImg})=>{

//     const [movies, setMovies] = useState([]);

//     useEffect(()=>{ // 
//         async function fetchData(){
//             const request =  await  axios.get(fetchURL); //fetch(`https://api.themoviedb.org/3/movie/550?api_key=e0b07ffc884de8b4da0f02dbb9a478a9`).then((responce)=>{
//            setMovies(request.data.results);
           

//             return request;
//         }
//          fetchData();
       
//     },[fetchURL]);
   
// //console.log(movies);





    return (

       

        <div  className="row">

          <h2>{title}</h2>
          
          <div className="row-posters">
                
                  {data.map(citydata =>(
                      <div className="card-item "  key={citydata.id} onClick={() => setClickedImg(citydata)}>
                   
                      <img  
                     
                      className={`row-poster `}
                      src={`${citydata.main_image}`} />
                      <h5>{citydata.name}</h5>
                   
                     </div> 
                  )
                 )  }
          </div>
        </div>

      
    );

}


export default Row;