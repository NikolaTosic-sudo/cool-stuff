import styled, { css } from "styled-components";
import vars from "../../styles/Vars";

export const StyledLoginPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${vars.colors.gray.appBg};
  background: url("/img/login-background.png") no-repeat bottom;
  background-size: cover;
`;

export const StyledLoginFormWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1),
    0px 4px 6px -2px rgba(16, 24, 40, 0.05), 0px 2px 10px rgba(0, 0, 0, 0.05),
    0px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 24px 32px;
  width: 390px;
  ${(props) =>
    props.changePassword &&
    css`
      width: 450px;
    `}
`;

export const StyledTopWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 28px;
  line-height: 32px;
  font-weight: 500;
  color: ${vars.colors.secondary.kinetikBlack};
  padding-bottom: 28px;

  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${vars.colors.gray[60]};
    margin-top: 8px;
    margin-bottom: 0;
  }
`;

export const StyledLoginFormDataWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    width: 100%;
  }
`;

export const StyledCrossedText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
  width: 100%;
  position: relative;
  & p {
    margin: 0px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #dedede;
    background: #ffffff;
    z-index: 2;
    padding: 0px 4px;
  }
`;
export const StyledLine = styled.div`
  border-bottom: 1px solid #dedede;
  top: 6px;
  position: absolute;
  width: 100%;
`;

export const StyledCheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  & input {
    padding: 0;
    height: initial;
    width: initial;
    margin: 0px;
    display: none;
    cursor: pointer;
  }
  & label {
    position: relative;
    cursor: pointer;
    margin: 0px;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #777777;
  }
  & label:before {
    content: "";
    -webkit-appearance: none;
    background-color: transparent;
    border: 1px solid #777777;
    width: 15px;
    height: 15px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 4px;
    top: -2px;
  }
  & input:checked + label:after {
    content: "";
    display: block;
    position: absolute;
    top: 4px;
    left: 3px;
    width: 8.5px;
    height: 5.5px;
    border: solid #ffffff;
    border-width: 0 0 1px 1px;
    transform: rotate(315deg);
  }
  & input:checked + label:before {
    background: #3f5479;
    border: 1px solid #3f5479;
  }
`;

export const StyledSignInButton = styled.div`
  height: 38px;
  background: #3f5479;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  margin: 20px 0px;
`;

export const StyledForgotPassword = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${vars.colors.primary.cerevelBlue};
  width: fit-content;
  cursor: pointer;
  text-align: end;
`;

export const StyledRestoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  & p {
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin: 0px;
    color: ${vars.colors.gray[60]};
    margin-bottom: 24px;
  }
  button {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const LoginFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 28px;

  label {
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: ${vars.colors.secondary.black};
  }
`;
