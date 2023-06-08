import React from "react";
import { DataText, LabelText, Wrapper, StyledText } from "./styled";

type DetailsDataType = {
    title: string;
    data: [] | string | number;
    textStyleType?: string;
};

const DetailsDataComponent = ({
    title,
    data,
    textStyleType,
}: DetailsDataType) => {
    const objToText = (item: string, idx: number) => {
        let styleVariant;
        if (textStyleType === "multi-variant-1") {
            styleVariant = idx % 2 ? "variant_three" : "variant_one";
        } else if (textStyleType === "multi-variant-2") {
            styleVariant = idx % 2 ? "variant_two" : "variant_one";
        }

        const StyledJsxText = (
            <span key={idx}>
                {idx !== 0 ? " / " : ""}
                <StyledText key={idx} $textStyleType={styleVariant}>
                    {item}
                </StyledText>
            </span>
        );

        return StyledJsxText;
    };

    return (
        <Wrapper>
            <LabelText>{title}</LabelText>
            <DataText>
                {typeof data === "object" ? (
                    data.map((item, idx) => objToText(item, idx))
                ) : (
                    <StyledText $textStyleType={textStyleType}>
                        {data}
                    </StyledText>
                )}
            </DataText>
        </Wrapper>
    );
};

export default DetailsDataComponent;
