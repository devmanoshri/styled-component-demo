import styled from "styled-components";

// using props
export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff" : "#4caf50"};
  border: solid 2px green;
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#fff")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    // pseudo classes
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "#4caf50"};
    color: ${(props) => (props.variant !== "outline" ? "#4caf50" : "#fff")};
  }
`;

// extending styles
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

// passed props and adding attributes
export const Submitbutton = styled(StyledButton).attrs((props) => ({
  type: "submit",
}))`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "#4caf50"};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
