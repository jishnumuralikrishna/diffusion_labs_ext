import { styled } from "styled-components";
import { COLORS } from "../../themes/colors";

type InputTypes = {
    $show?: boolean;
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

export const InputContainer = styled.div<InputTypes>`
    position: relative;
    width: 100%;

    &::after {
        position: absolute;
        right: 11px;
        top: 10px;
        bottom: 0;
        margin: 0 auto;
        content: attr(data-placeholder);
        pointer-events: none;
        background: ${COLORS.inputBG};
        font-style: normal;
        font-family: 'Bai Jamjuree', sans-serif;
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;

        ${p => p.$show ? "padding: 2px 5px;" : ""}
    }
`

export const Input = styled.input`
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
    color: ${COLORS.textColorLight}
`