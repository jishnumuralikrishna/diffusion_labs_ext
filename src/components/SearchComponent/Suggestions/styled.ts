import { styled } from "styled-components";
import { COLORS } from "../../../themes/colors";

export const SuggestionsWrapper = styled.ul`
    color: ${COLORS.textColorLight};
    list-style-type: none;
    text-align: left;
    background-color: ${COLORS.btnBgDark};
    padding: 0px;

    li{
        padding: 15px 40px;
        cursor: pointer;

        &:hover{
            background-color: ${COLORS.labelColor};
        }
    }
`