import { styled } from "styled-components";
import { COLORS } from "../../themes/colors";

export const DetailsComponentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: max-content;
    row-gap: 12px;
    padding: 13px 24px;
    background-color: ${COLORS.cardBgDark}
`