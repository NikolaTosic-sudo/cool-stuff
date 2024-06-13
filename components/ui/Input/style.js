import styled, { css } from "styled-components";
import vars from "../../../styles/Vars";

export const InputWrapper = styled.div`
  width: 100%;

  input,
  select,
  textarea {
    width: 100%;
    padding: 16px 16px;
    border: 1px solid ${vars.colors.gray[8]};
    border-radius: ${vars.borderRadius.secondary};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    &:focus {
      outline: none;
    }
  }

  textarea {
    min-height: 118px;
    max-height: 400px;
  }

  label {
    padding-bottom: 12px;
  }

  ${(props) =>
    props.bgGray &&
    css`
      input {
        background-color: #e9e9e9;
      }
    `}
`;

export const InputInnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  .placeholder {
    position: absolute;
    margin: 17px 0;
    padding: 0 4px;
    font-family: Roboto, sans-serif;
    color: #6c757d;
    display: flex;
    align-items: center;
    top: 0;
    left: 17px;
    transition: all 0.2s;
    transform-origin: 0% 0%;
    background: none;
    pointer-events: none;
  }

  .icon {
    position: absolute;
    right: 18px;
    top: 32%;
  }

  .search {
    position: absolute;
    left: 18px;
    top: 30%;
  }

  input:focus + .placeholder {
    transform: scale(0.8) translateY(-30px);
    background: #fff;
  }

  textarea:focus + .placeholder {
    transform: scale(0.8) translateY(-30px);
    background: #fff;
  }

  ${(props) =>
    props.hasValue &&
    css`
      input {
        border-color: ${vars.colors.primary.cerevelBlue};
        &:active,
        &:focus {
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(58, 85, 124, 0.12),
            0px 1px 2px rgba(16, 24, 40, 0.05);
        }
      }
      .editable-textarea {
        border-color: ${vars.colors.primary.cerevelBlue};
        &:active,
        &:focus {
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(58, 85, 124, 0.12),
            0px 1px 2px rgba(16, 24, 40, 0.05);
        }
      }
      .placeholder {
        transform: scale(0.8) translateY(-30px);
        background: #fff;
      }
    `}

  ${(props) =>
    props.search &&
    css`
      .placeholder {
        margin-left: 30px;
      }
      input {
        padding-left: 48px;
      }
    `}


  ${(props) =>
    props.error &&
    css`
      input,
      select,
      textarea {
        border-color: ${vars.colors.system.red};
      }
    `}

    ${(props) =>
    props.success &&
    css`
      input,
      select,
      textarea {
        border-color: ${vars.colors.system.green};
      }
    `}

    ${(props) =>
    props.disabled &&
    css`
      input {
        color: ${vars.colors.gray[20]};
        border-color: ${vars.colors.gray[20]};
        &:active,
        &:focus,
        &:hover {
          box-shadow: none;
          cursor: not-allowed;
        }
      }
      .placeholder {
        color: ${vars.colors.gray[20]};
      }
    `}
`;

export const InputError = styled.div`
  font-size: 12px;
  line-height: 1.3;
  color: ${vars.colors.system.red};
  margin-top: 5px;
`;

export const InputSuccess = styled.div`
  font-size: 12px;
  line-height: 1.3;
  color: ${vars.colors.system.green};
  margin-top: 5px;
`;

export const InputChip = styled.span`
  position: absolute;
  top: -5px;
  left: 17px;
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  color: #83858f;
  background-color: #fff;
  white-space: nowrap;

  ${(props) =>
    props.error &&
    css`
      color: #ff382c;
    `}
`;

export const DescriptionWrapper = styled.div`
  font-size: 12px;
  line-height: 1.3;
  color: #83858f;
  margin-top: 5px;

  ${(props) =>
    props.isError &&
    css`
      color: ${vars.colors.system.red};
    `}
`;
