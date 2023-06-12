import React from "react";
import { InputField, SelectField, TextArea } from "../../components";
import {
    BackButton,
    Divider,
    Form,
    PageContainer,
    SectionHeader,
    SectionTitle,
    SubmitBtn,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { addNewRecipe, getCountries } from "../../api";
import Loading from "../../components/Loading";
import { DIFFICULTY, getDifficultyValue } from "../../utils";

const AUTHENTICITY = ["Unverified", "Verified"];

const AddRecipe = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useQuery("getCountries", getCountries);
    const mutation = useMutation(addNewRecipe, {
        onSuccess: () => {
            navigate("/");
        },
    });

    if (isLoading || mutation.isLoading) {
        return <Loading />;
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData.entries());
        const postData = {
            ...values,
            origin: data?.data.find(
                (country: any) => country.name.common === values.origin
            ).cca2,
            volume: parseInt(values.volume.toString()),
            serves: parseInt(values.serves.toString()),
            difficulty: getDifficultyValue(values.difficulty.toString()),
        };
        mutation.mutate(postData);
    };

    return (
        <div>
            <PageContainer>
                <SectionHeader>
                    <BackButton onClick={() => navigate("/")} />
                    <SectionTitle>Add new recipe</SectionTitle>
                </SectionHeader>
                <Divider />
                <Form onSubmit={handleFormSubmit}>
                    <InputField
                        label="Name"
                        name="name"
                        gridArea="name"
                        maxLength={40}
                    />
                    <SelectField
                        label="Origin"
                        options={data?.data
                            .map((item: any) => item.name.common)
                            .sort()}
                        name="origin"
                        gridArea="origin"
                    />
                    <TextArea
                        label="Description"
                        name="description"
                        gridArea="description"
                    ></TextArea>
                    <SelectField
                        label="Difficulty"
                        options={DIFFICULTY.map((item) => item.name)}
                        name="difficulty"
                        gridArea="difficulty"
                    />
                    <InputField
                        label="Protein"
                        name="protein"
                        gridArea="protein"
                    />
                    <InputField
                        label="Produce"
                        name="produce"
                        gridArea="produce"
                    />
                    <InputField label="Spice" name="spice" gridArea="spice" />
                    <InputField
                        label="Cooking Oil"
                        name="cookingOil"
                        gridArea="cookingOil "
                    />
                    <InputField
                        label="Volume"
                        name="volume"
                        gridArea="volume"
                        unitPlaceholder="grams"
                    />
                    <InputField
                        label="Serves"
                        name="serves"
                        gridArea="serves"
                        unitPlaceholder="people"
                    />
                    <SelectField
                        label="Authenticity"
                        options={AUTHENTICITY}
                        name="authenticity"
                        gridArea="authenticity"
                    />
                    <InputField label="Stock" name="stock" gridArea="stock" />
                    <SubmitBtn type="submit" />
                </Form>
            </PageContainer>
        </div>
    );
};

export default AddRecipe;
