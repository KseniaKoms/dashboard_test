import { Dashboard } from "../dashboard/Dashboard";
import { Greeting } from "../greeting/Greeting";
import { Board } from "./Main.styled";

export const Main = () => {
  return (
    <Board>
      <Greeting />
      <Dashboard />
    </Board>
  );
};
