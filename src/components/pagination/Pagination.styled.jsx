import styled from "styled-components";
import { ThemeColors } from "../../globalStyles";

export const Container = styled.div`
  padding-top: 32px;
  display: flex;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.01em;

    color: ${ThemeColors.elseGrey};
  }

  ul {
    margin-left: auto;
    display: flex;
    gap: 12px;
  }

  li {
    padding-top: 6px;
    width: 26px;
    height: 24px;

    background-color: ${ThemeColors.background};
    border: 1px solid ${ThemeColors.borderGrey};
    border-radius: 4px;

    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -0.01em;
    text-align: center;
    color: ${ThemeColors.darkGrey};

    &:first-child,
    &:last-child {
      padding: 8px 9px;
    }

    &:nth-last-child(3) {
      background-color: transparent;
      border: none;
    }

    &:hover {
      cursor: pointer;
      background-color: ${ThemeColors.blue};
      color: ${ThemeColors.white};
    }
  }
`;
