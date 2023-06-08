import React, { useContext, useState } from "react";
import { InputField, InputWrapper, SearchIcon } from "./styled";
import Suggestions from "./Suggestions";
import { Recepies } from "../../data/recepies";
import { SearchComponentType, FilterSuggestionsType } from "./types";
import { RecipeContext } from "../../context/recipeContext";

const SearchComponent = ({
    placeholder = "Search cuisine",
    data = Recepies,
}: SearchComponentType) => {
    const [suggestions, setSuggestions] = useState<FilterSuggestionsType[]>([]);
    const { setSelectedRecipe } = useContext(RecipeContext);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState("");

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const query = e.currentTarget.value.toLowerCase();
        setValue(query);
        if (query.length > 1) {
            const filterSuggestions = data.filter(
                (suggestion) =>
                    suggestion.name.toLowerCase().indexOf(query) > -1
            );
            setSuggestions(filterSuggestions);
            setSuggestionsActive(true);
        } else {
            setSuggestionsActive(false);
        }
    };

    const handleClick = (selected: FilterSuggestionsType) => {
        setSelectedRecipe(selected);
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
