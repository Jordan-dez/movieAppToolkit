import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing"

import {useDispatch} from "react-redux"
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Home = () => {
const disptach = useDispatch();

  useEffect(() => {
  disptach(fetchAsyncMovies())
  disptach(fetchAsyncShows())
  }, [disptach]);


  return (
    <div>
      <div className='banner-img'>Home</div>
      <MovieListing />
    </div>
  )
}

export default Home