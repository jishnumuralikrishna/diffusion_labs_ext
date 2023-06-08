import { styled } from "styled-components";
import { COLORS } from "../../themes/colors";

type ToastPropsType = {
    $bgColor?: string;
    $titleColor?: string;
    $contentColor?: string;
}

export const ToastWrapper = styled.div<ToastPropsType>`
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 10px 20px;
    gap: 16px;
    font-style: normal;
    text-align: left;

    background-color: ${p => p.$bgColor ? p.$bgColor : COLORS.descBgColor};
`

export const ToastHeader = styled.div<ToastPropsType>`
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    gap: 10px;

    color: ${p => p.$titleColor ? p.$titleColor : COLORS.textColorDark};
`

export const ToastContent = styled.p<ToastPropsType>`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0px;

    color: ${p => p.$contentColor ? p.$contentColor : COLORS.textColorDark};
`