import React, { useState } from "react";
import LoginFormData from "./components/LoginFormData";
import RestorePassword from "./components/RestorePassword";
import { StyledLoginFormWrapper, StyledTopWrapper } from "./styles";

function LoginForm() {
  const [isPasswordForgot, setIsPasswordForgot] = useState(false);
  const switchView = () => {
    setIsPasswordForgot(!isPasswordForgot);
  };
  return (
    <StyledLoginFormWrapper>
      <StyledTopWrapper>
        {!isPasswordForgot ? "Log in" : "Forgot your Password?"}
      </StyledTopWrapper>
      {!isPasswordForgot ? (
        <LoginFormData onClick={switchView} />
      ) : (
        <RestorePassword onClick={switchView} />
      )}
    </StyledLoginFormWrapper>
  );
}

export default LoginForm;
