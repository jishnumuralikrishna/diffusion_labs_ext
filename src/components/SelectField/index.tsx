import React from "react";
import { Select, InputFieldWrapper, InputLabel } from "./styled";

type SelectInputType = {
    options: string[];
    label: string;
    name: string;
    gridArea?: string;
};

const SelectField = ({ label, options, name, gridArea }: SelectInputType) => {
    return (
        <InputFieldWrapper $gridArea={gridArea}>
            <InputLabel>{label}</InputLabel>

            <Select name={name} required>
                {options.map((option, idx) => (
                    <option key={idx} value={option}>
                        {option}
                    </option>
                ))}
            </Select>
        </InputFieldWrapper>
    );
};

export default SelectField;
