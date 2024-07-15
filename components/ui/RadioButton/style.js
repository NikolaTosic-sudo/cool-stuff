import styled, { css } from "styled-components";
import vars from "../../../styles/Vars";

export const StyledRadio = styled.div`
margin: 0.5rem;
input[type="radio"] {
  position: absolute;
  opacity: 0;
  + .radio-label {
    &:before {
      content: '';
      border-radius: 100%;
      border: 1px solid #CED4DD;
      display: inline-block;
      width: 16px;
      height: 16px;
      position: relative;
      top: 2px;
      margin-right: 8px; 
      vertical-align: top;
      cursor: pointer;
      text-align: center;
    }
  }
  &:checked {
    + .radio-label {
      &:before {
        background-color: #3A557C;
        box-shadow: inset 0 0 0 4px #f4f4f4;
      }
    }
  }
  &:focus {
    + .radio-label {
      &:before {
        outline: none;
        border-color: #3A557C;
      }
    }
  }
`;
