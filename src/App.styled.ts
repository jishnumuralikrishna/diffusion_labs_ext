import { styled } from "styled-components";
import { COLORS } from "./themes/colors";


export const AppContainer = styled.div`
  text-align: center;
  padding: 24px;
  width: 410px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${COLORS.bgColorDark};
`

export const ToastContainer = styled.div`
  padding: 10px;
  background-color: ${COLORS.cardBgDark}
`