import { styled } from "styled-components";
import { COLORS } from "../../themes/colors";

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

export const TextAreaInput = styled.textarea`
    max-width: 100%;
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
    color: ${COLORS.textColorLight};

    &::placeholder{
        color: ${COLORS.textColorLight};
    }
`

export const HintText = styled.p`
    margin: 0;
    font-family: 'Bai Jamjuree';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${COLORS.hintColor};
`