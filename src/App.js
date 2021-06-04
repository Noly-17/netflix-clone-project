import './App.css';
import React from 'react';
import Row from './Row';
import request from './requests';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={request.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>

    </div>
  );
}

export default App;
