import styled from "styled-components";
import vars from "../../styles/Vars";

export const TopBarWrap = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  z-index: 99;
  @media (max-width: ${vars.media.smMax}) {
    padding: 20px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 40px;
  left: 40px;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(25px);
  transition: background ease-in-out 0.25s;
  &:hover,
  &:active {
    background: rgba(255, 255, 255, 0.5);
  }
  &:active {
    transform: translateY(1px);
  }

  @media (max-width: ${vars.media.smMax}) {
    top: 16px;
    left: 16px;
    height: 36px;
    width: 36px;
  }
`;
