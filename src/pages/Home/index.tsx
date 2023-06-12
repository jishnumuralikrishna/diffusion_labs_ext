import React, { useContext, useEffect } from "react";
import {
    DetailsComponent,
    DishesHeaderComponent,
    SearchComponent,
    ToastComponent,
} from "../../components";
import { RecipeContext } from "../../context/recipeContext";
import { EmptyMessage, HomeWrapper, ToastContainer } from "./styled";
import { useQuery } from "react-query";
import { getRecipeByIndex } from "../../api";
import Loading from "../../components/Loading";
import { getDifficultyText } from "../../utils";

const Home = () => {
    const { selectedRecipe } = useContext(RecipeContext);
    const { data, isLoading, refetch } = useQuery(
        ["getrecipe", selectedRecipe],
        () => getRecipeByIndex(selectedRecipe),
        { enabled: selectedRecipe ? true : false }
    );

    useEffect(() => {
        if (selectedRecipe) {
            refetch();
        }
    }, [selectedRecipe]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <HomeWrapper>
            <SearchComponent placeholder="Search cuisine" />
            {data ? (
                <>
                    <DishesHeaderComponent data={data?.data.message} />
                    <ToastContainer>
                        <ToastComponent
                            difficulty={getDifficultyText(
                                data?.data.message.difficulty
                            )}
                            desc={data?.data.message.description}
                            btnLabel="View Full Recipe"
                        />
                    </ToastContainer>
                    <DetailsComponent data={data.data.message} />
                </>
            ) : (
                <EmptyMessage>
                    Ready for cooking? <br /> Start by searching for your
                    favourite dish
                </EmptyMessage>
            )}
        </HomeWrapper>
    );
};

export default Home;
