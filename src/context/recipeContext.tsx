import { createContext, useState } from "react";

type RecipeContextType = {
    selectedRecipe: number | undefined;
    setSelectedRecipe: (selected: number) => void;
};

const RecipeContextDefault: RecipeContextType = {
    selectedRecipe: 21,
    setSelectedRecipe: () => {},
};

export const RecipeContext =
    createContext<RecipeContextType>(RecipeContextDefault);

const RecipeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedRecipe, setSelectedRecipe] = useState<number>(21);

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
