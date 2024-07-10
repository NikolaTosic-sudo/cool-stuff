import styled, { css } from "styled-components";
import vars from "../../../styles/Vars";

export const StyledTags = styled.div`
  white-space: nowrap;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 4px 12px;
  color: ${vars.colors.secondary.black};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42;
  background-color: ${vars.colors.gray[2]};
  border: 1px solid ${vars.colors.gray[6]};
  border-radius: 100px;

  .icon-wrapper {
    margin-right: 5px;
  }

  .closedIcon-wrapper {
    margin-left: 3px;
    margin-top: 1px;

    &:hover {
      cursor: pointer;
    }
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    color: #fff;
    font-size: 10px;
  }

  ${(props) =>
    props.isActive &&
    css`
      border-color: ${vars.colors.tag.green};
      color: ${vars.colors.tag.green};
      background-color: ${vars.colors.tag.lightGreen};

      .circle {
        background-color: ${vars.colors.tag.green};
      }
    `}

  ${(props) =>
    props.isInActive &&
    css`
      border-color: ${vars.colors.tag.darkRed};
      color: ${vars.colors.tag.darkRed};
      background-color: ${vars.colors.tag.lightRed};

      .circle {
        background-color: red;
      }
    `}

    ${(props) =>
    props.yellow &&
    css`
      border-color: ${vars.colors.tag.yellow};
      color: ${vars.colors.tag.yellow};
      background-color: ${vars.colors.tag.lightYellow};

      .circle {
        background-color: ${vars.colors.tag.yellow};
      }
    `}

    ${(props) =>
    props.purple &&
    css`
      border-color: ${vars.colors.tag.purple};
      color: ${vars.colors.tag.purple};
      background-color: ${vars.colors.tag.lightPurple};

      .circle {
        background-color: ${vars.colors.tag.purple};
      }
    `}

        ${(props) =>
    props.blue &&
    css`
      border-color: ${vars.colors.tag.blue};
      color: ${vars.colors.tag.blue};
      background-color: ${vars.colors.tag.lightBlue};

      .circle {
        background-color: ${vars.colors.tag.blue};
      }
    `}
    ${(props) =>
    props.green &&
    css`
      border-color: ${vars.colors.tag.green};
      color: ${vars.colors.tag.green};
      background-color: ${vars.colors.tag.lightGreen};

      .circle {
        background-color: ${vars.colors.tag.green};
      }
    `}

    ${(props) =>
    props.red &&
    css`
      border-color: ${vars.colors.tag.darkRed};
      color: ${vars.colors.tag.darkRed};
      background-color: ${vars.colors.tag.lightRed};

      .circle {
        background-color: red;
      }
    `}

    ${(props) =>
    props.isSurveyScale &&
    css`
      padding: 0;
      border-radius: 50%;
      width: 20px;
      height: 20px;
    `}

    ${(props) =>
    props.black &&
    props.isSurveyScale &&
    css`
      border-color: ${vars.colors.secondary.black};
      color: #fff;
      background-color: ${vars.colors.secondary.black};
      padding: 0;
      border-radius: 50%;
      width: 20px;
      height: 20px;

      .circle {
        background-color: ${vars.colors.secondary.black};
      }
    `}

    ${(props) =>
    props.gray &&
    props.isSurveyScale &&
    css`
      border-color: ${vars.colors.gray[40]};
      color: #fff;
      background-color: ${vars.colors.gray[40]};
      padding: 0;
      border-radius: 50%;
      width: 20px;
      height: 20px;

      .circle {
        background-color: ${vars.colors.gray[40]};
      }
    `}
`;
