"use client"
import React from 'react'
import MovieList from './MovieList'
import useMovieList from '@/hooks/useMovieList'
import useFavorites from '@/hooks/useFavorites'
function MovieListGetData() {
    const { data: movies = [] } = useMovieList()
    const { data: favorites = [] } = useFavorites()
  return (
    <div>
        <MovieList title='Trending Now' data={movies}/>
        <MovieList title='My List' data={favorites}/>
    </div>
  )
}

export default MovieListGetData