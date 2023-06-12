import React from "react";
import { BtnContainer } from "./styled";

type BtnType = {
    label: string;
    bgColor?: string;
    labelColor?: string;
    redirectLink?: string;
    padding?: string;
    borderRadius?: string;
    otherStyles?: string;
    handleClick?: () => void;
};

const ButtonComponent = ({
    label,
    bgColor,
    labelColor,
    redirectLink,
    padding,
    borderRadius,
    otherStyles,
    handleClick,
}: BtnType) => {
    return (
        <BtnContainer
            href={redirectLink}
            target="_blank"
            $bgColor={bgColor}
            $labelColor={labelColor}
            $padding={padding}
            $borderRadius={borderRadius}
            $otherStyles={otherStyles}
            onClick={handleClick}
        >
            {label}
        </BtnContainer>
    );
};

export default ButtonComponent;
