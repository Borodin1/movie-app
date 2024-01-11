import { ReactNode } from 'react';

export interface IContentModel{
    id:number, 
    vote_average: number, 
    poster_path:string, 
    title?:string,
    name?:string 
}

export interface IContentPage{
    title:string,
    searchValue:string,
    onSearchHandle:(value:string)=>void,
    total_pages:number,
    currentPage:number,
    setCurrentPage:(page: number) => void,
    children:ReactNode;

}