import React, { useState } from "react";
import {
    InputLabel,
    InputFieldWrapper,
    TextAreaInput,
    HintText,
} from "./styled";

type TextAreaType = {
    placeholder?: string;
    label: string;
    name: string;
    gridArea?: string;
};

const TextArea = ({ placeholder, label, name, gridArea }: TextAreaType) => {
    const [cLength, setCLength] = useState(0);

    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setCLength(e.currentTarget.value.length);
    };

    return (
        <InputFieldWrapper $gridArea={gridArea}>
            <InputLabel>{label}</InputLabel>
            <TextAreaInput
                placeholder={placeholder}
                maxLength={200}
                onChange={handleChange}
                name={name}
                required
            ></TextAreaInput>
            <HintText>{cLength}/200 Characters</HintText>
        </InputFieldWrapper>
    );
};

export default TextArea;
