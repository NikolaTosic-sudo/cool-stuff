import styled from "styled-components";
import vars from "../../styles/Vars";

export const LayoutWrap = styled.section`
  overflow-y: scroll;
  overflow-x: hidden;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  inset: 0;
  padding: 20px;
  padding-top: 80px;
  background: linear-gradient(357.71deg, #042825 1.86%, #0f6059 98.08%), #042825;
  @media (max-width: ${vars.media.smMax}) {
    justify-content: end;
    padding: 20px 16px;
  }
`;
