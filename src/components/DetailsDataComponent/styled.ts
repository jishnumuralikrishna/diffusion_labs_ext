import { styled } from "styled-components";
import { COLORS } from "../../themes/colors";

export type DetailsStyleProps = {
    $textStyleType?: string;
}

const getTextStyle = (textStyleType: string) => {
    switch (textStyleType) {
        case "variant_one": return `background: linear-gradient(136.39deg, ${COLORS.gradientOne.colorOne} 3.18%, ${COLORS.gradientOne.colorTwo} 102.04%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-fill-color: transparent;`
        case "variant_two": return `background: linear-gradient(136.39deg, ${COLORS.gradientTwo.colorOne} 3.18%, ${COLORS.gradientTwo.colorTwo} 102.04%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-fill-color: transparent;`
        case "variant_three": return `color: ${COLORS.redTextColor}`;
        default: return `background: none`;
    }
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const LabelText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: ${COLORS.labelColor};
    margin: 0px;
`

export const DataText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: ${COLORS.textColorLight};
    margin: 0px;
`

export const StyledText = styled.span<DetailsStyleProps>`
    ${p => p.$textStyleType && getTextStyle(p.$textStyleType)}
`