import { Container, Name, Position, Wrapper } from "./Footer.styled";
import avatar from "../../assets/avatars/user.jpg";

export const Footer = () => {
  return (
    <Container>
      <img src={avatar} alt="user" />
      <Wrapper>
        <Name>Evano</Name>
        <Position>Project Manager</Position>
      </Wrapper>
    </Container>
  );
};
