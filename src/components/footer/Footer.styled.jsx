import styled from "styled-components";
import { ThemeColors } from "../../globalStyles";

export const Container = styled.div`
  display: flex;

  padding-top: 597px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.01em;
`;

export const Position = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.01em;

  color: ${ThemeColors.semiGrey};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;
