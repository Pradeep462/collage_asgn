
const API_KEY = "e0b07ffc884de8b4da0f02dbb9a478a9";

const requests = {
 
    
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchTrendingMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchTopRated : `/discover/movie?api_key=${API_KEY}&with_genres=10749`
}


//https://api.themoviedb.org/3/movie/550?api_key=043d5bcc9f0f88a293998d1fa2711fab

export default requests;