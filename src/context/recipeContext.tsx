import { createContext, useState } from "react";
import { FilterSuggestionsType } from "../components/SearchComponent/types";
import { Recepies } from "../data/recepies";

type RecipeContextType = {
    selectedRecipe: FilterSuggestionsType;
    setSelectedRecipe: (selected: FilterSuggestionsType) => void;
};

const RecipeContextDefault: RecipeContextType = {
    selectedRecipe: Recepies[0],
    setSelectedRecipe: () => {},
};

export const RecipeContext =
    createContext<RecipeContextType>(RecipeContextDefault);

const RecipeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedRecipe, setSelectedRecipe] = useState<FilterSuggestionsType>(
        Recepies[0]
    );

    const value = {
        selectedRecipe,
        setSelectedRecipe,
    };

    return (
        <RecipeContext.Provider value={value}>
            {children}
        </RecipeContext.Provider>
    );
};

export default RecipeContextProvider;
