import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
export const BoardIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={57}
    height={56}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M.5 0h56v56H.5z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.01)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={100}
        height={100}
      />
    </Defs>
  </Svg>
);