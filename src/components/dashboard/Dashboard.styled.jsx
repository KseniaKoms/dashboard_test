import styled from "styled-components";
import { ThemeColors } from "../../globalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 44px 40px 38px;
  width: 968px;

  background-color: ${ThemeColors.white};
  box-shadow: 0px 10px 60px ${ThemeColors.shadow};
  border-radius: 30px;

  h2 {
    margin-bottom: 7px;

    font-weight: 600;
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: -0.01em;
  }
  h3 {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.01em;

    color: ${ThemeColors.mint};
  }

  input {
    position: relative;

    width: 216px;
    height: 38px;
    padding: 10px 0 10px 40px;

    background-color: ${ThemeColors.lightMint};
    border-radius: 10px;
    border: none;

    &::placeholder {
      font-weight: 400;
      font-size: 12px;
      line-height: 1.5;
      letter-spacing: -0.01em;

      color: ${ThemeColors.elseGrey};
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  padding-top: 40px;
  padding-bottom: 14px;
  display: grid;
  grid-template-columns: 172px 131px 156px 207px 152px auto;

  border-bottom: 1px solid ${ThemeColors.borderGrey};
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  color: ${ThemeColors.elseGrey};
`;

export const InputWrapper = styled.div`
  position: relative;

  img {
    position: absolute;
    left: 10px;
    bottom: 8px;
  }
`;

export const List = styled.ul``;

export const Item = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: 172px 131px 156px 207px 152px auto;
  align-items: center;

  border-bottom: 1px solid ${ThemeColors.borderGrey};
`;

export const Paragpaph = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  text-align: left;

  color: ${ThemeColors.semiBlack};
`;
