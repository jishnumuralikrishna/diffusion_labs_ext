import React from "react";
import { DataText, LabelText, Wrapper, StyledText } from "./styled";
import { DetailsLabels } from "../../utils";

type DetailsDataType = {
    title: string;
    data: string;
};

const Item = ({
    data,
    textStyleType,
}: {
    data: string;
    textStyleType?: string;
}) => {
    return (
        <span>
            <StyledText $textStyleType={textStyleType}>{data}</StyledText>
        </span>
    );
};

const DetailsDataComponent = ({ title, data }: DetailsDataType) => {
    const styleText = (title: string | number) => {
        if (
            title === DetailsLabels.authenticity ||
            title === DetailsLabels.stock ||
            title === DetailsLabels.cookingOil
        ) {
            return <Item textStyleType="variant_two" data={data} />;
        } else if (title === DetailsLabels.produce) {
            return data.split(",").map((item, idx) =>
                idx % 2 ? (
                    <>
                        {" / "}
                        <Item
                            textStyleType="variant_three"
                            data={item}
                            key={idx}
                        />
                    </>
                ) : (
                    <Item textStyleType="variant_one" data={item} key={idx} />
                )
            );
        } else if (title === DetailsLabels.spice) {
            return data.split(",").map((item, idx) =>
                idx % 2 ? (
                    <>
                        {" / "}
                        <Item
                            textStyleType="variant_two"
                            data={item}
                            key={idx}
                        />
                    </>
                ) : (
                    <Item textStyleType="variant_one" data={item} key={idx} />
                )
            );
        } else {
            return (
                <span>
                    <Item data={data} />
                </span>
            );
        }
    };

    return (
        <Wrapper>
            <LabelText>{title}</LabelText>
            <DataText>{styleText(title)}</DataText>
        </Wrapper>
    );
};

export default DetailsDataComponent;
