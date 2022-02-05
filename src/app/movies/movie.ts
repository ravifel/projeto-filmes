//Aqui vai ser definido um TIPO para Movies
//Essa classe vai estar representando o Movie

export class Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface ISearchResult {
    Search: ISearchItem[];
    Response: boolean;
}

export interface ISearchItem {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}