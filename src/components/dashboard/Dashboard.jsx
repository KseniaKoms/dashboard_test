import {
  Container,
  Grid,
  InputWrapper,
  Item,
  List,
  Paragpaph,
  Title,
  TitleWrapper,
  Wrapper,
} from "./Dashboard.styled";
import search from "../../assets/icons/search-icon.svg";
import { customers } from "../../utils/customers";
import { Button } from "../button/Button";
import { Pagination } from "../pagination/Pagination";

export const Dashboard = () => {
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <h2>All Customers</h2>
          <h3>Active Members</h3>
        </TitleWrapper>
        <InputWrapper>
          <input type="text" placeholder="Search" />
          <img src={search} alt="search" />
        </InputWrapper>
      </Wrapper>

      <Grid>
        <Title>Customer Name</Title>
        <Title>Company</Title>
        <Title>Phone Number</Title>
        <Title>Email</Title>
        <Title>Country</Title>
        <Title>Status</Title>
      </Grid>
      <List>
        {customers.map(
          ({ name, phone, company, country, email, isActive, id }) => (
            <Item key={id}>
              <Paragpaph>{name}</Paragpaph>
              <Paragpaph>{company}</Paragpaph>
              <Paragpaph>{phone}</Paragpaph>
              <Paragpaph>{email}</Paragpaph>
              <Paragpaph>{country}</Paragpaph>
              <Button isActive={isActive}></Button>
            </Item>
          )
        )}
      </List>
      <Pagination />
    </Container>
  );
};
