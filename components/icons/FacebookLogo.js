import * as React from "react";

const SvgFacebookLogo = (props) => (
  <svg
    width={35}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={35} height={35} rx={10} fill="#4267B2" />
    <g clipPath="url(#facebook_logo_svg__a)">
      <path
        d="m22.154 18.75.555-3.62h-3.473v-2.348c0-.99.485-1.956 2.04-1.956h1.58v-3.08S21.423 7.5 20.053 7.5c-2.86 0-4.73 1.733-4.73 4.872v2.758h-3.179v3.62h3.18v8.75h3.912v-8.75h2.918Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="facebook_logo_svg__a">
        <path fill="#fff" transform="translate(7.5 7.5)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFacebookLogo;
