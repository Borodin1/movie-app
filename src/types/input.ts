export interface I_Input{
    type:string,
    value:string,
    handleChange:(value:string)=>void,
    placeholder:string
}

export interface I_SearchInput{
    title:string,
    searchValue:string,
    onSearchHandle:(value:string)=>void,
}