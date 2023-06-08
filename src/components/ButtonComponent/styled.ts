import { styled } from "styled-components";
import { COLORS } from "../../themes/colors";

type ButtonPropsType = {
    $bgColor?: string;
    $labelColor?: string;
}


export const BtnContainer = styled.a<ButtonPropsType>`
    font-family: 'Roboto', sans-serif;
    width: 100%;
    text-align: center;
    padding: 11px 0px 13px 0px;
    border-radius: 6px;
    text-decoration: none;

    background-color: ${p => p.$bgColor ? p.$bgColor : COLORS.btnBgDark};
    color: ${p => p.$labelColor ? p.$labelColor : COLORS.textColorLight};
`