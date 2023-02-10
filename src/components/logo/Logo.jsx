import { Container } from "./Logo.styled";
import icon from "../../assets/icons/setting-icon.svg";

export const Logo = () => {
  return (
    <Container>
      <img src={icon} alt="logo" />
      <h3>Dashboard</h3>
    </Container>
  );
};
