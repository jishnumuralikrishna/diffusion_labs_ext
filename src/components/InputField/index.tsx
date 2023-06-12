import React from "react";
import { Input, InputContainer, InputFieldWrapper, InputLabel } from "./styled";

type InputTypes = {
    unitPlaceholder?: string;
    label: string;
    name: string;
    gridArea?: string;
    maxLength?: number;
};

const InputField = ({
    unitPlaceholder,
    label,
    name,
    gridArea,
    maxLength = 15,
}: InputTypes) => {
    return (
        <InputFieldWrapper $gridArea={gridArea}>
            <InputLabel>{label}</InputLabel>
            <InputContainer
                data-placeholder={unitPlaceholder}
                $show={unitPlaceholder ? true : false}
            >
                <Input type="text" name={name} maxLength={maxLength} required />
            </InputContainer>
        </InputFieldWrapper>
    );
};

export default InputField;
