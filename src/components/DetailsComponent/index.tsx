import React, { useContext } from "react";
import { DetailsComponentContainer } from "./styled";
import DetailsDataComponent from "../DetailsDataComponent";
import { RecipeContext } from "../../context/recipeContext";
import { RecepieDetails } from "../SearchComponent/types";

const DetailsComponent = () => {
    const { selectedRecipe } = useContext(RecipeContext);
    return (
        <DetailsComponentContainer>
            {selectedRecipe
                ? selectedRecipe.details.map(
                      (item: RecepieDetails, index: number) => (
                          <DetailsDataComponent
                              key={index}
                              title={item.title}
                              data={item.value}
                              textStyleType={item.textStyleType}
                          />
                      )
                  )
                : ""}
        </DetailsComponentContainer>
    );
};

export default DetailsComponent;
