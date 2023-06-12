import { styled } from "styled-components";
import { COLORS } from "../../../themes/colors";

export const SuggestionsWrapper = styled.ul`
    color: ${COLORS.textColorLight};
    list-style-type: none;
    text-align: left;
    background-color: ${COLORS.suggestionBg};
    padding: 8px;
`

export const LiTag = styled.li`
    padding: 14px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;

    &:hover{
        background-color: ${COLORS.inputBG};
    }

    p{
        margin: 0;
        font-family: 'Bai Jamjuree';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        flex: 1;
    }
`

export const DiffIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`