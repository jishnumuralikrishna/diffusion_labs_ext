import React from "react";
import { DiffIcon, LiTag, SuggestionsWrapper } from "./styled";
import { FilterSuggestionsType } from "../types";
import { ReactComponent as HardIcon } from "../../../assets/icons/hard.svg";
import { ReactComponent as MediumIcon } from "../../../assets/icons/mediumDiff.svg";
import { ReactComponent as EasyIcon } from "../../../assets/icons/easy.svg";

const Suggestions = ({
    suggestions,
    handleClick,
}: {
    suggestions: FilterSuggestionsType[];
    handleClick: (suggestion: FilterSuggestionsType) => void;
}) => {
    const getDiffIcon = (difficulty: any) => {
        if (difficulty === 3) {
            return (
                <DiffIcon>
                    <HardIcon /> <p>{" Hard"}</p>
                </DiffIcon>
            );
        } else if (difficulty === 2) {
            return (
                <DiffIcon>
                    <MediumIcon /> <p>{" Medium"}</p>
                </DiffIcon>
            );
        } else {
            return (
                <DiffIcon>
                    <EasyIcon /> <p>{" Easy"}</p>
                </DiffIcon>
            );
        }
    };

    return (
        <SuggestionsWrapper>
            {suggestions.map(
                (suggestion: FilterSuggestionsType, index: React.Key) => {
                    return (
                        <LiTag
                            key={index}
                            onClick={() => handleClick(suggestion)}
                        >
                            <img
                                src={`https://flagsapi.com/${suggestion.origin}/flat/24.png`}
                                alt={suggestion.origin}
                            />
                            <p>{suggestion.name}</p>
                            {getDiffIcon(suggestion.difficulty)}
                        </LiTag>
                    );
                }
            )}
        </SuggestionsWrapper>
    );
};

export default Suggestions;
