//Core
import { lazy } from 'react';
import {            Route, Routes } from 'react-router-dom'
import { paths } from './helpers';

//components
const HomePage = lazy(()=> import('pages/HomePage'))
const MoviesPage = lazy(()=> import('pages/MoviesPage'))
const MovieInfoPages = lazy(()=> import('pages/MovieInfoPages'))
const TVShowPages = lazy(()=> import('pages/TVShowPages'))
const TVShowInfoPage = lazy(()=> import('pages/TVShowInfoPage'))


export const PublicRoutes:React.FC=()=>{
    return(
    <Routes>
        <Route path={paths.home} element={<HomePage/>}/>
        <Route path={paths.homepage} element={<HomePage/>}/>
        <Route path={paths.movies} element={<MoviesPage/>}/>
        <Route path={paths.movieDetails} element={<MovieInfoPages/>}/>
        <Route path={paths.tvshows} element={<TVShowPages/>}/>
        <Route path={paths.tvshowDetails} element={<TVShowInfoPage/>}/>
    </Routes>
    )
}