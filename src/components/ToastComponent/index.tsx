import React from "react";
import { ToastContent, ToastHeader, ToastWrapper } from "./styled";
import ButtonComponent from "../ButtonComponent";
import { ReactComponent as FoodIconSvg } from "../../assets/icons/food.svg";

type ToastTypes = {
    difficulty: string;
    desc: string;
    bgColor?: string;
    btnLabel?: string;
    titleColor?: string;
    contentColor?: string;
    redirectLink?: string;
};

const ToastComponent = ({
    difficulty,
    desc,
    bgColor,
    btnLabel,
    titleColor,
    contentColor,
    redirectLink,
}: ToastTypes) => {
    return (
        <ToastWrapper $bgColor={bgColor}>
            <ToastHeader $titleColor={titleColor}>
                <FoodIconSvg />
                Difficulty: {difficulty}
            </ToastHeader>
            <div>
                <ToastContent $contentColor={contentColor}>{desc}</ToastContent>
            </div>
            {btnLabel && (
                <ButtonComponent label={btnLabel} redirectLink={redirectLink} />
            )}
        </ToastWrapper>
    );
};

export default ToastComponent;
