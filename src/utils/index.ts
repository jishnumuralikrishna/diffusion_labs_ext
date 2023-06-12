export const DIFFICULTY = [
    { name: "Easy", value: 1 },
    { name: "Medium", value: 2 },
    { name: "Hard", value: 3 },
];

type detailsType = {
    [key: string]: string
}

export const DetailsLabels: detailsType = {
    protein: "Protein",
    produce: "Produce",
    spice: "Spices",
    cookingOil: "Cooking Oil",
    volume: "Volume/ Weight",
    serves: "Serves",
    authenticity: "Authenticity",
    stock: "Stock"
}

export const getDifficultyValue = (value: string) => {
    return DIFFICULTY.find(
        (diff) => diff.name === value
    )?.value
}

export const getDifficultyText = (value: number) => {
    return DIFFICULTY.find(
        (diff) => diff.value === value
    )?.name
}