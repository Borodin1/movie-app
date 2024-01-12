export const pathsPublic:{[k:string]:string}={
    home:'/',
    homepage:'/movie-app',
    movies:'/movies',
    tvshows:'/tv-shows',
    movieDetails:'/movies/:idFilm',
    tvshowDetails:'/tv-show/:idTVShow'

}

export const paths:{[k:string]:string}=Object.assign({},pathsPublic)
