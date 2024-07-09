import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  InputWrapper,
  StyledForgotPassword,
  StyledLoginFormDataWrapper,
  LoginFooter,
} from "../../styles";
import { loginReq } from "./model";
import toast, { Toaster } from "react-hot-toast";
import { setCookie, setLocalStorage } from "../../../../helpers/storage";
import { useUserStoreObservable } from "../../../../helpers/user";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import Checkbox from "../../../ui/Checkbox";

function LoginFormData({ onClick }) {
  const history = useRouter();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const { changeUserState } = useUserStoreObservable();
  const onChange = (type, value) => {
    setUserData({ ...userData, [type]: value });
  };

  const logIn = () => {
    if (userData.email !== "" && userData.password !== "") {
      toast.promise(
        loginReq({
          email: userData.email,
          password: userData.password,
        }).then((res) => {
          setLocalStorage("token", res.data.access_token);
          setLocalStorage("app_user_id", res.data.id);
          setCookie("token", res.data.access_token, 1);
          setCookie("app_user_id", res.data.id, 365);
          changeUserState(res.data);
          history.push(
            res.data.password_reset === null ? "/change-password" : "/"
          );
        }),
        {
          loading: "Logging in...",
          success: "Successfully logged in",
          error: (err) => err?.response?.data.message,
        }
      );
    }
  };
  return (
    <StyledLoginFormDataWrapper>
      <InputWrapper>
        <Input
          value={userData.email}
          onChange={(e) => onChange("email", e.target.value)}
          type="email"
          placeholder="Your Email"
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          value={userData.password}
          onChange={(e) => onChange("password", e.target.value)}
          type="password"
          placeholder="Password"
        />
      </InputWrapper>
      <LoginFooter>
        <Checkbox
          value={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
          id={"remember"}
          type={"checkbox"}
          label="Remember me"
        />

        <StyledForgotPassword onClick={onClick}>
          Forgot password?
        </StyledForgotPassword>
      </LoginFooter>
      <Button marginBottom={12} onClick={logIn}>
        Sign In
      </Button>
      <Button tetriary onClick={logIn}>
        Sign in with SSO
      </Button>
      <Toaster />
    </StyledLoginFormDataWrapper>
  );
}

export default LoginFormData;
