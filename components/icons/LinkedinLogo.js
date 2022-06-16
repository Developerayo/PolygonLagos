import * as React from "react";

const SvgLinkedinLogo = (props) => (
  <svg
    width={35}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={35} height={35} rx={10} fill="#0072B1" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.357 14.974h3.096v1.542c.445-.887 1.589-1.683 3.306-1.683 3.293 0 4.074 1.765 4.074 5.003v5.997H22.5v-5.26c0-1.844-.446-2.884-1.58-2.884-1.575 0-2.23 1.121-2.23 2.884v5.26h-3.333V14.974ZM9.643 25.692h3.333v-10.86H9.642v10.86Zm3.81-14.4a2.11 2.11 0 0 1-.627 1.501 2.158 2.158 0 0 1-3.032 0 2.122 2.122 0 0 1-.626-1.501c0-.564.225-1.104.627-1.503a2.153 2.153 0 0 1 3.031 0c.402.399.628.939.628 1.503Z"
      fill="#fff"
    />
  </svg>
);

export default SvgLinkedinLogo;
