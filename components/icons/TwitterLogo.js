import * as React from "react";

const SvgTwitterLogo = (props) => (
  <svg
    width={35}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={35} height={35} rx={10} fill="#00ACEE" />
    <g clipPath="url(#twitter_logo_svg__a)">
      <path
        d="M27.203 11.614a7.772 7.772 0 0 1-2.23.611 3.891 3.891 0 0 0 1.707-2.148 7.75 7.75 0 0 1-2.465.941A3.883 3.883 0 0 0 17.6 14.56a11.023 11.023 0 0 1-8.002-4.057 3.884 3.884 0 0 0 1.202 5.183 3.872 3.872 0 0 1-1.758-.485v.05a3.883 3.883 0 0 0 3.114 3.807 3.912 3.912 0 0 1-1.754.066 3.884 3.884 0 0 0 3.627 2.695 7.79 7.79 0 0 1-4.822 1.663c-.31 0-.619-.018-.926-.055a10.978 10.978 0 0 0 5.95 1.745c7.141 0 11.046-5.915 11.046-11.045 0-.167-.005-.335-.012-.502a7.892 7.892 0 0 0 1.936-2.008l.002-.003Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="twitter_logo_svg__a">
        <path fill="#fff" transform="translate(7.5 7.5)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTwitterLogo;
