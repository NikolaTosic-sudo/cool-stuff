import styled, { css } from "styled-components";
import vars from "../../../styles/Vars";

export const ToggleWrap = styled.div``;

export const ToggleInnerWrap = styled.div`
  position: relative;
  width: 30px;
  margin: 0 15px;
  display: inline-block;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  text-align: left;
  .toggle-switch-checkbox {
    display: none;
  }
  .toggle-switch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 0 solid #bbb;
    border-radius: 20px;
    margin: 0;
  }
  .toggle-switch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
    &:before,
    &:after {
      display: block;
      float: left;
      width: 50%;
      height: 16px;
      padding: 0;
      line-height: 15px;
      font-size: 14px;
      color: white;
      font-weight: bold;
      box-sizing: border-box;
    }
    &:before {
      content: "";
      text-transform: uppercase;
      padding-left: 10px;
      background-color: ${vars.colors.system.green};
      color: #fff;
    }
  }
  .toggle-switch-disabled {
    background-color: #ddd;
    cursor: not-allowed;
    &:before {
      background-color: #ddd;
      cursor: not-allowed;
    }
  }
  .toggle-switch-inner:after {
    content: "";
    text-transform: uppercase;
    padding-right: 10px;
    background-color: #bbb;
    color: #fff;
    text-align: right;

    background-color: ${vars.colors.gray[10]};
  }
  .toggle-switch-switch {
    display: block;
    width: 12px;
    height: 12px;
    margin: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 14px;
    border: 0 solid #bbb;
    border-radius: 50%;
    transition: all 0.3s ease-in 0s;
    background: #fff;
  }
  .toggle-switch-checkbox:checked + .toggle-switch-label {
    .toggle-switch-inner {
      margin-left: 0;
    }
    .toggle-switch-switch {
      right: 0px;
    }
  }

  ${(props) =>
    props.small &&
    css`
      .toggle-switch-switch {
        width: 8px;
        height: 8px;
        margin: 4px;
        right: 14px;
      }

      .toggle-switch-label {
        height: 16px;
        width: 24px;
      }

      .toggle-switch-checkbox:checked + .toggle-switch-label {
        .toggle-switch-inner {
          margin-left: 0;
        }
        .toggle-switch-switch {
          right: 5px;
        }
      }
    `}
`;

export const ToggleLabel = styled.span`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: ${vars.colors.gray[40]};
  ${(props) =>
    props.checked &&
    css`
      color: ${vars.colors.secondary.black};
    `}
`;
