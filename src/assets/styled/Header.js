import styled from "styled-components";
const colors = {
  dark: "#333",
  white: "#f5f6f7",
  blue: "#66bfbf",
  gray: "#ccc",
  silver: "#f5f5f7",
  black: "#3a4750",
};
const Fhather = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  a {
    text-decoration: none;
  }
  h1 {
    color: ${colors.blue};
    font-weight: bold;
    font-size: 1.6rem;
    height: 2vh;
    font-family: "Passions Conflict", cursive;
  }
`;
const ListaLink = styled.div`
  height: 4vh;
  width: 100%;
  ul {
    display: flex;
    align-items: center;
  }
  li {
    list-style: none;
    height: 4vh;
  }
  li a {
    text-decoration: none;
    color: #66bfbf;
    margin-right: 3rem;
    border-bottom: solid;
    border-color: transparent;
    transition: all 0.7s ease;
    font-family: "Abyssinica SIL", serif;
  }
`;

export { ListaLink, Fhather };
