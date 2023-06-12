export type RecepieDetails = {
    [key: string]: string | number;
}

export type FilterSuggestionsType ={
    name: string;
    origin: string;
    description: string;
    difficulty: number;
    protein: string;
    produce: string;
    spice: string;
    cookingOil: string;
    volume: number;
    serves: number;
    authenticity: string;
    stock: string;
}

export type SearchComponentType = {
    placeholder: string;
    data?: FilterSuggestionsType[]
};