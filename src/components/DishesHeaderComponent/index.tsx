import React, { useContext } from "react";
import { DishName, HeaderContainer, HeaderWrapper } from "./styled";
import { ReactComponent as SpainFlag } from "../../assets/flags/spain.svg";
import { RecipeContext } from "../../context/recipeContext";
import SocialComponent from "../SocialComponent";

const DishesHeaderComponent = () => {
    const { selectedRecipe } = useContext(RecipeContext);
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <SpainFlag />
                <DishName>{selectedRecipe.name}</DishName>
            </HeaderWrapper>
            <SocialComponent />
        </HeaderContainer>
    );
};

export default DishesHeaderComponent;
