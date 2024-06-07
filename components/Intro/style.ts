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
  font-size: 72px;
  text-align: center;
  letter-spacing: 0.6px;
  @media (max-width: ${vars.media.smMax}) {
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0px;
  }
`;
