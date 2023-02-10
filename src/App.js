import { Main } from "./components/main/Main";
import { Sidebar } from "./components/sidebar/Sidebar";
import GlobalStyle, { Container } from "./globalStyles";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />
      <Main />
    </Container>
  );
}

export default App;
