const API_KEY = import.meta.env.VITE_API_KEY;

const Requests = {
fetchTrending: '/trending/all/week?api_key=${API_KEY}&language=en_US',
// fetchPopular: '/movie/popular?api_key=${API_KEY}&language=en_US',
fetchTopRatedMovies: '/movie/top_rated?api_key=${API_KEY}&language=en_US',
fetchActionMovies: '/genre/movie/list?api_key=${API_KEY}&with_generes=28',
fetchHorrorMovies: '/genre/movie/list?api_key=${API_KEY}&with_generes=27',
fetchRomanceMovies: '/genre/movie/list?api_key=${API_KEY}&with_generes=10749',
fetchDocumentaries: '/genre/movie/list?api_key=${API_KEY}&with_generes=99',
fetchTVShow: '/tv/popular?api_key=${API_KEY}&language=en_US',
}

export default Requests
