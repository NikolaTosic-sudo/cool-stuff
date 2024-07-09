import React, { useState } from "react";
import { StyledRestoreWrapper, InputWrapper } from "../../styles";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";

function RestorePassword({ onClick }) {
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <StyledRestoreWrapper>
      {!isPasswordReset ? (
        <>
          <p style={{ textAlign: "center" }}>
            Type your email and we will send you reset instructions!
          </p>
          <InputWrapper>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email"
            />
          </InputWrapper>

          <Button lg onClick={() => setIsPasswordReset(!isPasswordReset)}>
            Reset Password
          </Button>
        </>
      ) : (
        <>
          <span>Please call this number to reset your password.</span>
          <a href="tel:+555-555-555">555-555-555</a>
          <Button onClick={onClick}>Back to Log in</Button>
        </>
      )}
    </StyledRestoreWrapper>
  );
}

export default RestorePassword;
