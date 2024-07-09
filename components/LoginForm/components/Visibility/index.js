import React from "react";
import { StyledVisibilityContainer } from "./styles";

function Visibility({ isPasswordVisible, onChange }) {
  return (
    <StyledVisibilityContainer onClick={onChange}>
      {isPasswordVisible ? (
        <img src="/svg/eye.svg" alt="hide password" />
      ) : (
        <img src="/svg/eye-closed.svg" alt="show password" />
      )}
    </StyledVisibilityContainer>
  );
}

export default Visibility;
