import { styled } from "styled-components"
import { COLORS } from "../../themes/colors"

export const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const IconButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.socialBG};
    width: 24px;
    height: 24px;
    border-radius: 50%;
`