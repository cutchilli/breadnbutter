import * as React from "react";
import glamorous, { CSSProperties } from "glamorous";

import "./fonts/press-start-2p.css";

// General Styles
import {
  preventSelection,
  IButtonProps,
  getColor,
  getFontSize,
  getPadding,
  ElementSize,
  disabledElement,
} from "../common";

// 8 Bit Styles
import {
  font,
  getBackgroundColor,
  getForegroundColor,
  getClickable,
  get2dOutline,
} from "./common";

const buttonStyle = ({
  buttonSize = ElementSize.Normal,
  buttonType,
  rootColor,
  disabled,
  loading,
}: IButtonProps): CSSProperties => {
  const mainColor = getColor(buttonType, rootColor);

  return {
    "display": "inline-block",
    "position": "relative",
    "textAlign": "center",
    "textDecoration": "none",
    "border": "none",
    "fontFamily": font,
    "margin": "0.5rem",
    "fontSize": `${getFontSize(buttonSize)}rem`,
    "background": getBackgroundColor(mainColor),
    "color": getForegroundColor(mainColor),
    "padding": `${getPadding(buttonSize)}rem`,
    ...(disabled ? {} : getClickable(mainColor)),
    ...get2dOutline(),
    ...(loading ? {
      ...disabledElement,
    } : {}),
    ":disabled": disabledElement,
  } as CSSProperties;
};

const Button = ({children, onClick, ...props}: IButtonProps) => {
  const StyledButton = glamorous.button<IButtonProps>(
    preventSelection,
    buttonStyle,
  );

  return (
    <StyledButton onClick={() => onClick && onClick()} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;