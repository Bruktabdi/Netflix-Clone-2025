// import React from 'react'
// import Row from '../Row/Row'
// import Requests from '../../../utils/Requests'

// function RowList() {
//   return (
//     <>
//       <Row 
//       title="NETFLIX ORIGINALS"
//       fetchUrl={Requests.fetchNetflixOriginals}
//       isLargeRow={true}
//       />
//       <Row title="Trending Now" fetchUrl={Requests.fetchTrending} 
//       />
//        <Row title="Netflix Originals" fetchUrl={Requests.fetchNetflixOriginals} 
//       />
//  <Row title="Top Rated" fetchUrl={Requests.fetchTopRatedMovies} 
//       />
//  <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} 
//       />
// <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} 
//       />
// <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} 
//       />
// <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} 
//       />
// <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} 
//       />
//       <Row title="TV Shows" fetchUrl={Requests.fetchTvShow} 
//       />
//     </>
//   )
// }

// export default RowList

import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/Requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowList;