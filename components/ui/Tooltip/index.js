import React from "react";
import { StyledToolTip } from "./style";

/**
 * TooltTip component
 * @param {ReactNode} children
 * @param {string} title Text for the Tooltip
 * @alias module:UI.ToolTip
 */

const ToolTip = ({ children, title }) => {
  return (
    <StyledToolTip>
      {children}
      <span className="tooltiptext">{title}</span>
    </StyledToolTip>
  );
};

export default ToolTip;
