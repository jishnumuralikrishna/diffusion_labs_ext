import React, { useContext, useState } from "react";
import { InputField, InputWrapper, SearchIcon } from "./styled";
import Suggestions from "./Suggestions";
import { SearchComponentType, FilterSuggestionsType } from "./types";
import { RecipeContext } from "../../context/recipeContext";
import { useQuery } from "react-query";
import { getAllRecipes } from "../../api";
import Loading from "../Loading";

const SearchComponent = ({
    placeholder = "Search cuisine",
}: SearchComponentType) => {
    const { data, isLoading } = useQuery("getRecipes", getAllRecipes);
    const [suggestions, setSuggestions] = useState<FilterSuggestionsType[]>([]);
    const { setSelectedRecipe } = useContext(RecipeContext);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState("");

    if (isLoading) {
        return <Loading />;
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const query = e.currentTarget.value.toLowerCase();
        setValue(query.charAt(0).toUpperCase() + query.slice(1));

        if (query.length > 1) {
            const filterSuggestions = data?.data?.message.filter(
                (suggestion: any, index: number) =>
                    suggestion.name.toLowerCase().indexOf(query) > -1
            );
            setSuggestions(filterSuggestions);
            setSuggestionsActive(true);
        } else {
            setSuggestionsActive(false);
        }
    };

    const handleClick = (selected: FilterSuggestionsType) => {
        const selectedIndex = data?.data.message.findIndex(
            (item: any) => item.name === selected.name
        );
        setSelectedRecipe(selectedIndex);
        setValue(selected.name);
        setSuggestionsActive(false);
    };

    return (
        <InputWrapper>
            <InputWrapper>
                <SearchIcon />
                <InputField
                    type="text"
                    placeholder={placeholder}
                    onChange={handleChange}
                    value={value}
                />
            </InputWrapper>
            {suggestionsActive && (
                <Suggestions
                    suggestions={suggestions}
                    handleClick={handleClick}
                />
            )}
        </InputWrapper>
    );
};

export default SearchComponent;
