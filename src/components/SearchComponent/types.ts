export type RecepieDetails = {
    [key: string]: any;
}

export type FilterSuggestionsType ={
    name: string;
    difficulty: string;
    desc: string;
    link: string;
    icon: string;
    details: RecepieDetails;
}

export type SearchComponentType = {
    placeholder: string;
    data?: FilterSuggestionsType[]
};