import React from "react";
import { BtnContainer } from "./styled";

type BtnType = {
    label: string;
    bgColor?: string;
    labelColor?: string;
    redirectLink?: string;
};

const ButtonComponent = ({
    label,
    bgColor,
    labelColor,
    redirectLink,
}: BtnType) => {
    return (
        <BtnContainer
            href={redirectLink}
            target="_blank"
            $bgColor={bgColor}
            $labelColor={labelColor}
        >
            {label}
        </BtnContainer>
    );
};

export default ButtonComponent;
