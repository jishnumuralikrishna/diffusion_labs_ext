import React from "react";
import { IconButton, SocialWrapper } from "./styled";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram.svg";
import { ReactComponent as MediumIcon } from "../../assets/icons/medium.svg";
import ButtonComponent from "../ButtonComponent";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../themes/colors";

const buttonStyles = `
    font-family: 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
`;

const SocialComponent = ({ name }: { name: string }) => {
    const navigate = useNavigate();

    const handleAddRecipe = () => {
        navigate("/addrecipe");
    };

    return (
        <SocialWrapper>
            <IconButton
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${name}`}
            >
                <TwitterIcon />
            </IconButton>
            <IconButton
                target="_blank"
                href={`https://telegram.me/share/url?text=${name}`}
            >
                <TelegramIcon />
            </IconButton>
            <IconButton target="_blank" href={`https://medium.com/`}>
                <MediumIcon />
            </IconButton>
            <ButtonComponent
                label="+ Add recipe"
                padding="3px 7px"
                otherStyles={buttonStyles}
                handleClick={handleAddRecipe}
                bgColor={COLORS.socialBG}
            />
        </SocialWrapper>
    );
};

export default SocialComponent;
