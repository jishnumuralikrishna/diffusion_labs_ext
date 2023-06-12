import React from "react";
import { ToastContent, ToastHeader, ToastWrapper } from "./styled";
import ButtonComponent from "../ButtonComponent";
import { ReactComponent as FoodIconSvg } from "../../assets/icons/food.svg";
import { COLORS } from "../../themes/colors";

type ToastTypes = {
    difficulty: string | undefined;
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
        <ToastWrapper
            $bgColor={difficulty === "Hard" ? COLORS.hardBg : bgColor}
        >
            <ToastHeader
                $titleColor={
                    difficulty === "Hard" ? COLORS.textColorLight : titleColor
                }
            >
                <FoodIconSvg />
                Difficulty: {difficulty}
            </ToastHeader>
            <div>
                <ToastContent
                    $contentColor={
                        difficulty === "Hard"
                            ? COLORS.textColorLight
                            : contentColor
                    }
                >
                    {desc}
                </ToastContent>
            </div>
        </ToastWrapper>
    );
};

export default ToastComponent;
