import styled from "styled-components";

const COLORS = {
  primary: {
    "--main": "#5D3FD3",
    "--accent": "white",
  },
  secondary: {
    "--main": "#5D3FD3",
    "--accent": "white",
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 3px double #CD7F32;
  border-radius: 10px;
  padding: 8px 16px;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);
  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: #CD7F32;
  color: var(--accent);
  border: 3px double var(--main);
`;

export default Button;