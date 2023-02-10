import { Container, Item } from "./List.styled";
import key from "../../assets/icons/key-square.svg";
import icon from "../../assets/icons/3d-icon.svg";
import arrow from "../../assets/icons/arrow-icon.svg";
import user from "../../assets/icons/user-icon.svg";
import wallet from "../../assets/icons/wallet-icon.svg";
import discount from "../../assets/icons/discount-icon.svg";
import msg from "../../assets/icons/msg-icon.svg";

export const List = () => {
  return (
    <Container>
      <ul>
        <Item>
          <img src={key} alt="key" />
          <p>Dashboard</p>
        </Item>
        <Item>
          <img src={icon} alt="square" />
          <p>Product</p>
          <img src={arrow} alt="arrow" />
        </Item>
        <Item>
          <img src={user} alt="user" />
          <p>Customers</p>
          <img src={arrow} alt="arrow" />
        </Item>
        <Item>
          <img src={wallet} alt="wallet" />
          <p>Income</p>
          <img src={arrow} alt="arrow" />
        </Item>
        <Item>
          <img src={discount} alt="discount" />
          <p>Promote</p>
          <img src={arrow} alt="arrow" />
        </Item>
        <Item>
          <img src={msg} alt="help" />
          <p>Help</p>
          <img src={arrow} alt="arrow" />
        </Item>
      </ul>
    </Container>
  );
};
