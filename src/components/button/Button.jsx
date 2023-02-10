import { BtnActive, BtnInactive } from "./Button.styled";

export const Button = ({ isActive }) => {
  return (
    <>
      {isActive ? (
        <BtnActive type="button">Active</BtnActive>
      ) : (
        <BtnInactive type="button">Inactive</BtnInactive>
      )}
    </>
  );
};
