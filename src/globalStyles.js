import styled, { createGlobalStyle } from "styled-components";

export const ThemeColors = {
  lightBlue: "#FAFBFF",
  lightGrey: "#838383",
  white: "#FFFFFF",
  grey: "#9197B3",
  blue: "#5932EA",
  semiGrey: "#757575",
  shadow: "rgba(226, 236, 249, 0.5)",
  mint: "#16C098",
  elseGrey: "#B5B7C0",
  lightMint: "#F9FBFF",
  borderGrey: "#EEEEEE",
  semiBlack: "#292d32",
  btnBackgroundActive: "rgba(22, 192, 152, 0.38);",
  btnBorderActive: "#00B087",
  btnBackgroundInactive: "#FFC5C5",
  btnBorderInactive: "#DF0404",
  background: "#f5f5f5",
  darkGrey: "#404B52",
};

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    
}

body {
    background-color: ${ThemeColors.lightBlue};
}

	button {
		cursor: pointer;
		background: transparent;
		border: none;
	}
	ul,
	ol {
		padding: 0;
		margin: 0;
		list-style: none;
	}
	li {
		list-style: none;
	}
	input {
		outline: none;
	}
	a {
		text-decoration: none;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
		padding: 0;
	}
    img {
        margin: 0;
        display: block;
    }
`;

export const Container = styled.div`
  display: flex;
`;

export default GlobalStyle;
