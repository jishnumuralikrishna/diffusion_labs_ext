import axios from "axios";

const apiURL = "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes";
const countriesURL = "https://restcountries.com/v3.1/all?fields=cca2,name";

const headers = {
    'Access-Control-Allow-Origin': '*',
}


export const getCountries = async() => {
    return await axios.get(countriesURL)
}

export const getAllRecipes = async() => {
    return await axios.get(apiURL, {headers});
}

export const addNewRecipe = async(postData: any) => {
     return axios.post(apiURL, postData, {headers});
}

export const getRecipeByIndex = async(index: any) => {
    return await axios.get(apiURL + `/${parseInt(index)}`, {headers});
}