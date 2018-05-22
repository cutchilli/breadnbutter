import glamorous, { CSSProperties, GlamorousComponent } from "glamorous";

import "../fonts/press-start-2p.css";

// General Styles
import {
  preventSelection,
  IButtonProps,
  getColor,
  getFontSize,
  getPadding,
  ElementSize,
  disabledElement,
} from "../../common";

// 8 Bit Styles
import {
  font,
  getBackgroundColor,
  getForegroundColor,
  getClickable,
  get2dOutline,
} from "../common";

const buttonStyle = (props: IButtonProps): CSSProperties => {
  const {
    buttonSize = ElementSize.Normal,
    buttonType,
    rootColor,
    disabled,
    loading,
  } = props;

  const mainColor = getColor(buttonType, rootColor);

  return {
    "display": "inline-block",
    "position": "relative",
    "textAlign": "center",
    "textDecoration": "none",
    "fontFamily": font,
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

const Button:
  GlamorousComponent<IButtonProps & React.HTMLProps<HTMLButtonElement>,
    IButtonProps> = glamorous.button<IButtonProps>(
  preventSelection,
  buttonStyle,
);

export default Button;
