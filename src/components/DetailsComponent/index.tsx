import React from "react";
import { DetailsComponentContainer } from "./styled";
import DetailsDataComponent from "../DetailsDataComponent";
import { RecepieDetails } from "../SearchComponent/types";
import { DetailsLabels } from "../../utils";

const DetailsComponent = ({ data }: { data: RecepieDetails }) => {
    return (
        <DetailsComponentContainer>
            {Object.keys(DetailsLabels).map((item, idx) => (
                <DetailsDataComponent
                    key={idx}
                    title={DetailsLabels[item]}
                    data={data[item].toString()}
                />
            ))}
        </DetailsComponentContainer>
    );
};

export default DetailsComponent;
