import styled, { css } from "styled-components";
import vars from "../../../styles/Vars";

export const StyledToolTip = styled.div`
  position: relative;
  display: inline-block;

  .tooltiptext {
    visibility: hidden;
    max-width: 120px;
    overflow-wrap: break-word;
    background-color: ${vars.colors.secondary.navBlue};
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
    border-radius: ${vars.borderRadius.secondary};
    color: #fff;
    text-align: center;
    font-size: 12px;
    padding: 12px 16px;

    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;

    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;
