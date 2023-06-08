import React from "react";
import { SuggestionsWrapper } from "./styled";
import { FilterSuggestionsType } from "../types";

const Suggestions = ({
    suggestions,
    handleClick,
}: {
    suggestions: FilterSuggestionsType[];
    handleClick: (suggestion: FilterSuggestionsType) => void;
}) => {
    return (
        <SuggestionsWrapper>
            {suggestions.map(
                (suggestion: FilterSuggestionsType, index: React.Key) => {
                    return (
                        <li key={index} onClick={() => handleClick(suggestion)}>
                            {suggestion.name}
                        </li>
                    );
                }
            )}
        </SuggestionsWrapper>
    );
};

export default Suggestions;
