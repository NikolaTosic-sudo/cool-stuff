import React from "react";
import { StyledTags } from "./style";
import Image from "next/image";

/**
 * Tag component
 * @param {string} label Label for the Tag
 * @param {string} icon Route for the icon insite the Tag
 * @param {boolean} active Styling prop for the Tag
 * @param {boolean} inactive Styling prop for the Tag
 * @param {string} name String inside the circle in Tag
 * @param {boolean} yellow Styling prop for the Tag
 * @param {boolean} blue Styling prop for the Tag
 * @param {boolean} purple Styling prop for the Tag
 * @param {boolean} closed Styling prop for the Tag
 * @param {boolean} red Styling prop for the Tag
 * @param {boolean} green Styling prop for the Tag
 * @alias module:UI.Tag
 */

const Tag = ({
  label,
  icon,
  active,
  inactive,
  name,
  yellow,
  blue,
  purple,
  closed,
  red,
  green,
  onClose,
  isSurveyScale,
  black,
  gray,
}) => {
  const renderTagCircle = () => {
    return (
      !icon &&
      (active || inactive || yellow || blue || purple || red || green) && (
        <div className="circle">{name && name}</div>
      )
    );
  };

  return (
    <StyledTags
      isActive={active}
      isInActive={inactive}
      yellow={yellow}
      blue={blue}
      purple={purple}
      red={red}
      green={green}
      isSurveyScale={isSurveyScale}
      gray={gray}
      black={black}
    >
      {icon && (
        <span className="icon-wrapper">
          <Image src={icon} width={16} height={16} alt="icon" />
        </span>
      )}
      {renderTagCircle()}
      {label}
      {closed && (
        <span onClick={() => onClose()} className="closedIcon-wrapper">
          <Image src="/svg/closed.svg" width={12} height={12} alt="closed" />
        </span>
      )}
    </StyledTags>
  );
};

export default Tag;
