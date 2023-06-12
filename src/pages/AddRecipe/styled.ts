import { styled } from "styled-components";
import { COLORS } from "../../themes/colors";
import { ReactComponent as BackIcon } from "../../assets/icons/backicon.svg";


export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const SectionHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const BackButton = styled(BackIcon)`
    cursor: pointer;
`

export const SectionTitle = styled.h3`
    font-family: 'Bai Jamjuree';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin: 0;
`

export const Divider =  styled.div`
    height: 1px;
    width: 100%;
    background-color: ${COLORS.dividerColor};
`

export const Form = styled.form`
    display: grid;
    grid-column-gap: 12px;
    grid-row-gap: 24px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "name origin"
        "description description"
        "difficulty protein"
        "produce spice"
        "cookingOil volume"
        "serves authenticity"
        "stock stock"
        "button button";
`

export const SubmitBtn = styled.input`
    grid-area: button;
    padding: 9px 14px 11px;
    background: #764AF4;
    border-radius: 6px;
    color: ${COLORS.textColorLight};
    font-family: 'Bai Jamjuree';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    border: none;
    cursor: pointer;
`
