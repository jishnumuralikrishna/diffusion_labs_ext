import { styled } from "styled-components";
import { COLORS } from "../../themes/colors";
import { ReactComponent as SearchIconSvg } from "../../assets/icons/search.svg";


export const InputWrapper = styled.div`
    position: relative;
`

export const SearchIcon = styled(SearchIconSvg)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 11px;
    margin: auto 0;
    width: 20px;
    height: 20px;
`

export const InputField = styled.input`
    width: 100%;
    height: 40px;
    padding: 8px 41px;
    box-shadow: 0px 0px 0px 1px #5B6178;
    border-radius: 6px;
    border: none;
    font-family: "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
    color: ${COLORS.textColorLight};
    background-color: ${COLORS.cardBgDark};

    &::placeholder{
        color: ${COLORS.labelColor}
    }
`