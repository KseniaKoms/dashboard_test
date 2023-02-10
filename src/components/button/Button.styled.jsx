import styled from "styled-components";
import { ThemeColors } from "../../globalStyles";

export const BtnActive = styled.button`
  width: 80px;
  padding: 4px 18px;

  background-color: ${ThemeColors.btnBackgroundActive};
  color: ${ThemeColors.btnBorderActive};
  border: 1px solid ${ThemeColors.btnBorderActive};
  border-radius: 4px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  text-align: center;
`;

export const BtnInactive = styled(BtnActive)`
  padding: 4px 12px;

  background-color: ${ThemeColors.btnBackgroundInactive};
  color: ${ThemeColors.btnBorderInactive};
  border: 1px solid ${ThemeColors.btnBorderInactive};
`;
