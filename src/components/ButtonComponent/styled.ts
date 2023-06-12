import { styled } from "styled-components";
import { COLORS } from "../../themes/colors";

type ButtonPropsType = {
    $bgColor?: string;
    $labelColor?: string;
    $padding?: string;
    $borderRadius?: string;
    $otherStyles?: string;
}


export const BtnContainer = styled.a<ButtonPropsType>`
    font-family: 'Roboto', sans-serif;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    
    background-color: ${p => p.$bgColor ? p.$bgColor : COLORS.btnBgDark};
    color: ${p => p.$labelColor ? p.$labelColor : COLORS.textColorLight};
    padding: ${p => p.$padding ? p.$padding : "11px 0px 13px 0px"};
    border-radius: ${p => p.$borderRadius ? p.$borderRadius : "6px"};

    ${p => p.$otherStyles ? p.$otherStyles : ""};
`