import React from "react";
import { StyledToolTip } from "./style";

const ToolTip = ({ children, title }) => {
  return (
    <StyledToolTip>
      {children}
      <span className="tooltiptext">{title}</span>
    </StyledToolTip>
  );
};

export default ToolTip;
