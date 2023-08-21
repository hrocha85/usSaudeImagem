import * as React from "react";

import { chakra, useToken } from "@chakra-ui/react";

const HighlightLine = ({ color, ...rest }) => {
  const fill = color ? useToken("colors", color) : null;

  return (
    <chakra.svg
      width="221px"
      height="84px"
      viewBox="0 0 221 84"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...rest}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          transform="translate(-5.000000, -42.000000)"
          fill={fill ? fill : "currentColor"}
        >
          <g transform="translate(5.000000, 42.000000)">
            <path d="M43.61295,13.062 C43.2046,14.1963 46.19915,20.32155 51.3715,28.94225 C69.112,58.3885 66.7525,58.661 69.974,58.661 C73.4225,58.661 72.9235,57.3905 62.397,37.88055 C51.0995,16.964 45.1556,9.0693 43.61295,13.062 Z" />
            <path d="M40.57305,63.47 C39.9832,64.06 40.3008,64.5595 42.38795,66.828 C45.5186,70.1855 50.7365,71.592 50.7365,69.0965 C50.691,67.055 41.88885,62.1545 40.57305,63.47 Z" />
            <path d="M33.17745,78.0345 C11.30815,70.775 3.73106,68.96 1.14485,70.503 C-0.987635,71.728 0.2827815,72.6355 6.2265,74.1325 C11.3082,75.3575 20.56415,78.1705 29.63855,81.2105 C37.07945,83.706 38.80355,83.9785 40.8907,83.207 C43.7491,82.0725 42.07035,80.9835 33.17745,78.0345 Z" />
            <path d="M79.457,2.12765 C79.0485,3.21658 81.3625,13.56095 83.4045,19.9584 C83.9035,21.50105 84.9015,25.58455 85.6275,28.98745 C86.9885,35.61175 87.2155,35.9752 89.802,35.9752 C92.252,35.9752 92.252,36.0655 89.3025,24.9947 C84.1755,5.7116 80.954,-1.77435 79.457,2.12765 Z" />
            <path d="M25.82725,49.7231 C29.3209,52.899 30.40985,55.667 33.7673,55.667 C39.16655,55.667 39.3934,55.304 32.9506,48.81565 C21.0178,36.79205 9.5841,28.4436 7.134,29.98625 C4.820045,31.5289 13.6222,37.10965 25.82725,49.7231 Z" />
            <path d="M190.165,39.83145 C193.613,36.92765 195.8815,33.9331 195.8815,32.2997 C195.8815,30.0311 193.0685,29.3501 190.664,31.1196 C174.6475,42.7802 158.4495,59.84 161.1265,62.154 C163.758,64.4225 166.435,62.6985 178.141,51.2195 C183.3135,46.1831 188.713,41.0565 190.165,39.83145 Z" />
            <path d="M126.8255,3.39813 C125.419,7.9807 123.967,18.77925 118.2955,41.6014 C117.161,46.1386 117.161,46.2289 118.613,47.59005 C119.7925,48.67895 122.0615,49.0878 123.1955,48.36185 C124.1485,47.772 131.7255,16.01155 133.5405,5.0769 C134.1755,0.81192 128.4135,-1.86503 126.8255,3.39813 Z" />
            <path d="M210.6275,58.6615 C196.8345,62.518 171.698,72.6355 170.2915,74.9495 C169.2935,76.5375 173.3315,78.0805 176.054,77.1275 L186.172,73.4975 C201.7345,67.917 220.8815,59.75 220.8815,58.7065 C220.836,56.574 218.0685,56.5745 210.6275,58.6615 Z" />
            <path d="M160.8995,12.0643 C160.1285,13.3801 157.8145,16.96445 150.827,26.6287 C147.651,30.98445 142.388,40.05885 142.388,41.1478 C142.388,43.32565 148.5585,35.79385 159.085,20.73035 C161.3535,17.46355 163.622,14.42365 164.1665,13.9699 C166.6165,11.7467 162.3515,9.6142 160.8995,12.0643 Z" />
          </g>
        </g>
      </g>
    </chakra.svg>
  );
};

export default HighlightLine;
