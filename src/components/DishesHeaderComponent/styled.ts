import { styled } from "styled-components";
import { COLORS } from "../../themes/colors";


export const HeaderContainer = styled.div`
    display: flex;
    color: ${COLORS.textColorLight};
    justify-content: space-between;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const DishName = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin: 0;
`

