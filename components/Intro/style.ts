import styled from "styled-components";
import vars from "../../styles/Vars";

export const IntroWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
  @media (max-width: ${vars.media.smMax}) {
    justify-content: space-between;
    height: fit-content;
    justify-self: end;
  }
`;

export const IntroHeader = styled.h1`
  margin-bottom: 0;
  color: #fff;
  @media (max-width: ${vars.media.smMax}) {
    font-size: 72px;
    line-height: 91px;
  }
`;
