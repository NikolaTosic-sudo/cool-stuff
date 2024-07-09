import styled from "styled-components";

export const StyledLineContained = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  position: relative;
  width: 100%;
  & label {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #777777;
    margin-bottom: 6px;
  }
  & input {
    padding: 8px 12px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    width: 100%;
    &:focus-visible {
      outline: 1px solid #e1e1e1;
    }
  }
`;

export const StyledVisibilityContainer = styled.div`
  cursor: pointer;
  width: fit-content;
  padding: 8px;
  position: absolute;
  bottom: -4px;
  right: -34px;
`;
