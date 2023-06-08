import React, { useContext } from "react";
import {
    DetailsComponent,
    DishesHeaderComponent,
    SearchComponent,
    ToastComponent,
} from "./components";
import { AppContainer, ToastContainer } from "./App.styled";
import { RecipeContext } from "./context/recipeContext";

const App = () => {
    const { selectedRecipe } = useContext(RecipeContext);
    return (
        <AppContainer>
            <SearchComponent placeholder="Search cuisine" />
            <DishesHeaderComponent />
            <ToastContainer>
                <ToastComponent
                    difficulty={selectedRecipe.difficulty}
                    desc={selectedRecipe.desc}
                    btnLabel="View Full Recipe"
                    redirectLink={selectedRecipe.link}
                />
            </ToastContainer>
            <DetailsComponent />
        </AppContainer>
    );
};

export default App;
