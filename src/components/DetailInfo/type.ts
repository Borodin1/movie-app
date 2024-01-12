export interface IDetailInfo{
    title:string,
    id:string|number,
    backdrop_path:string,
    poster_path:string,
    tagline?:string,
    overview:string,
    vote_average:number,
    release_date?:number,
    runtime?:number,
    genresString?:[string]
}