import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../request'

const Home = () => {
  return (
    <>
      <Main/>
      <Row rowId ='1'  title="UpComing" fetchURL={request.requestUpcoming}/>
      <Row rowId ='2' title="Popular" fetchURL={request.requestPopular}/>
      <Row rowId ='3' title="Trending" fetchURL={request.requestTrending}/>
      <Row rowId ='4' title="NowPlaying" fetchURL={request.requestNowPlaying}/>
      <Row rowId ='5' title="TopRated" fetchURL={request.requestTopRated}/>
    </>
  )
}

export default Home