import { DishName, HeaderContainer, HeaderWrapper } from "./styled";
import SocialComponent from "../SocialComponent";
import { FilterSuggestionsType } from "../SearchComponent/types";

type DetailsHeaderComponentType = {
    data: FilterSuggestionsType;
};

const DishesHeaderComponent = ({ data }: DetailsHeaderComponentType) => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img
                    src={`https://flagsapi.com/${data.origin}/flat/24.png`}
                    alt={data.origin}
                />
                <DishName>{data.name}</DishName>
            </HeaderWrapper>
            <SocialComponent name={data.name} />
        </HeaderContainer>
    );
};

export default DishesHeaderComponent;
