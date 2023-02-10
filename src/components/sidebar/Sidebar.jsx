import { Container } from "./Sidebar.styled";
import { Logo } from "../logo/Logo";
import { List } from "../sidebar-list/List";
import { Footer } from "../footer/Footer";

export const Sidebar = () => {
  return (
    <Container>
      <Logo />
      <List />
      <Footer />
    </Container>
  );
};
