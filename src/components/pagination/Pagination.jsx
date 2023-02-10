import { Container } from "./Pagination.styled";
import left from "../../assets/icons/right-arrow-icon.svg";
import right from "../../assets/icons/left-arrow-icon.svg";

export const Pagination = () => {
  return (
    <Container>
      <p>Showing data 1 to 8 of 256K entries</p>
      <ul>
        <li>
          <img src={left} alt="left" />
        </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>...</li>
        <li>40</li>
        <li>
          <img src={right} alt="right" />
        </li>
      </ul>
    </Container>
  );
};
