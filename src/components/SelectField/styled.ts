import { styled } from "styled-components";
import { COLORS } from "../../themes/colors";
import downArrow from "../../assets/icons/downarrow.svg";

type InputTypes = {
    $gridArea?: string;
}

export const InputFieldWrapper = styled.div<InputTypes>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    
    ${p => p.$gridArea ? `grid-area: ${p.$gridArea}` : ""}
`

export const InputLabel = styled.label`
    font-family: 'Bai Jamjuree', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`

export const Select = styled.select`
    width: 100%;
    padding: 11px 8px;
    background: ${COLORS.inputBG};
    box-shadow: 0px 0px 0px 1px #5B6178;
    border-radius: 6px;
    border: none;
    font-family: 'Bai Jamjuree', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    color: ${COLORS.textColorLight};

    background-image: url(${downArrow});
    background-repeat: no-repeat;
    background-position: calc(100% - 8px) center;
`
