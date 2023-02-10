import styled from "styled-components";
import { ThemeColors } from "../../globalStyles";

export const Container = styled.div`
  padding-top: 64px;

  li:not(:last-child) {
    margin-bottom: 40px;
  }

  p {
    margin-right: auto;
    margin-left: 14px;

    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.01em;
    color: ${ThemeColors.grey};
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 250px;
  height: 46px;
  padding: 11px;

  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: ${ThemeColors.blue};

    p {
      color: ${ThemeColors.white};
    }
    svg {
      fill: white;
    }
  }
`;
