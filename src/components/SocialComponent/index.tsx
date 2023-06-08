import React, { useContext } from "react";
import { IconButton, SocialWrapper } from "./styled";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram.svg";
import { ReactComponent as MediumIcon } from "../../assets/icons/medium.svg";
import { ReactComponent as InternetIcon } from "../../assets/icons/internet.svg";
import { RecipeContext } from "../../context/recipeContext";

const SocialComponent = () => {
    const { selectedRecipe } = useContext(RecipeContext);
    return (
        <SocialWrapper>
            <IconButton
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${selectedRecipe.name}&url=${selectedRecipe.link}`}
            >
                <TwitterIcon />
            </IconButton>
            <IconButton
                target="_blank"
                href={`https://telegram.me/share/url?url=${selectedRecipe.link}&text=${selectedRecipe.name}`}
            >
                <TelegramIcon />
            </IconButton>
            <IconButton target="_blank" href={`https://medium.com/`}>
                <MediumIcon />
            </IconButton>
            <IconButton target="_blank" href={`https://www.google.com/`}>
                <InternetIcon />
            </IconButton>
        </SocialWrapper>
    );
};

export default SocialComponent;
