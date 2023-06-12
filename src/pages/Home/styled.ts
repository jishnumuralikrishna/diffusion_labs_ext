import { styled } from "styled-components";
import { COLORS } from "../../themes/colors";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const ToastContainer = styled.div`
  padding: 10px;
  background-color: ${COLORS.cardBgDark}
`

export const EmptyMessage = styled.h4`
  color: ${COLORS.labelColor};
`