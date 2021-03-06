import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../../src";
import { ElementSize, ElementType } from "../../src/common";

storiesOf("8Bit/Button", module)
  .add("normal with text (primary)", () => (
    <Button buttonType={ElementType.Primary}>Normal Primary</Button>
  ))
  .add("small with text (link)", () => (
    <Button buttonSize={ElementSize.Small} buttonType={ElementType.Link} >Small Link</Button>
  ))
  .add("large with text (info)", () => (
    <Button buttonSize={ElementSize.Large} buttonType={ElementType.Info}>Large Info</Button>
  ))
  .add("normal with text (success)", () => (
    <Button buttonSize={ElementSize.Normal} buttonType={ElementType.Success}>Yay. Success.</Button>
  ))
  .add("small with text (danger)", () => (
    <Button buttonSize={ElementSize.Small} buttonType={ElementType.Danger}>Eeep. Dangja!</Button>
  ))
  .add("small with text (danger | disalbeleledlds)", () => (
    <Button disabled buttonSize={ElementSize.Small} buttonType={ElementType.Danger}>Eeep. Dangja!</Button>
  ))
  .add("small with text (purple)", () => (
    <Button buttonSize={ElementSize.Small} rootColor="purple">Who da purp?</Button>
  ));
