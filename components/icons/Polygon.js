import * as React from "react";
const SvgPolygon = (props) => (
  <svg
    viewBox="0 0 273 273"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#polygon_svg__a)" d="M.102.722h272.594v272.11H.102z" />
    <defs>
      <pattern
        id="polygon_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#polygon_svg__b"
          transform="matrix(.00083 0 0 .00083 0 0)"
        />
      </pattern>
      <image
        id="polygon_svg__b"
        width={1200}
        height={1200}
      />
    </defs>
  </svg>
);
export default SvgPolygon;