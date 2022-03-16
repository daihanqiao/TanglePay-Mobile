/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0037 18.6331C12.982 18.6331 13.9056 18.514 14.7747 18.2756C15.6487 18.0372 16.4556 17.7219 17.1955 17.3296C17.9404 16.9373 18.6083 16.5053 19.1993 16.0335C19.7902 15.5618 20.2942 15.09 20.7114 14.6182C21.1285 14.1415 21.4463 13.702 21.6648 13.2998C21.8883 12.8926 22 12.5649 22 12.3166C22 12.0683 21.8883 11.743 21.6648 11.3408C21.4413 10.9336 21.121 10.4941 20.7039 10.0223C20.2868 9.54562 19.7827 9.07138 19.1918 8.59963C18.6009 8.12787 17.933 7.69584 17.1881 7.30354C16.4482 6.91124 15.6412 6.5959 14.7672 6.35754C13.8932 6.11918 12.9721 6 12.0037 6C11.0354 6 10.1167 6.11918 9.24767 6.35754C8.38361 6.5959 7.57914 6.91124 6.83426 7.30354C6.08939 7.69584 5.41899 8.12787 4.82309 8.59963C4.23215 9.07138 3.72564 9.54562 3.30354 10.0223C2.88144 10.4941 2.55866 10.9336 2.3352 11.3408C2.11173 11.743 2 12.0683 2 12.3166C2 12.5649 2.11173 12.8926 2.3352 13.2998C2.55866 13.702 2.87896 14.1415 3.29609 14.6182C3.71819 15.09 4.22471 15.5618 4.81564 16.0335C5.40658 16.5053 6.07449 16.9373 6.81937 17.3296C7.56425 17.7219 8.3712 18.0372 9.24022 18.2756C10.1092 18.514 11.0304 18.6331 12.0037 18.6331ZM12.0037 17.7095C11.1546 17.7095 10.3451 17.6052 9.57542 17.3966C8.80571 17.1831 8.08566 16.9025 7.41527 16.5549C6.74985 16.2073 6.14649 15.8299 5.60521 15.4227C5.0689 15.0106 4.60708 14.6034 4.21974 14.2011C3.8324 13.7939 3.53445 13.424 3.32588 13.0912C3.12228 12.7585 3.02048 12.5003 3.02048 12.3166C3.02048 12.1527 3.12228 11.9094 3.32588 11.5866C3.53445 11.2638 3.8324 10.8988 4.21974 10.4916C4.60708 10.0795 5.0689 9.66729 5.60521 9.25512C6.14649 8.83799 6.74985 8.45313 7.41527 8.10056C8.08566 7.74798 8.80571 7.46493 9.57542 7.2514C10.3451 7.0329 11.1546 6.92365 12.0037 6.92365C12.843 6.92365 13.6474 7.0329 14.4171 7.2514C15.1868 7.46493 15.9044 7.74798 16.5698 8.10056C17.2402 8.45313 17.8461 8.83799 18.3873 9.25512C18.9286 9.66729 19.3904 10.0795 19.7728 10.4916C20.1601 10.8988 20.4581 11.2638 20.6667 11.5866C20.8752 11.9094 20.9795 12.1527 20.9795 12.3166C20.9795 12.5003 20.8752 12.7585 20.6667 13.0912C20.4581 13.424 20.1601 13.7939 19.7728 14.2011C19.3904 14.6034 18.9286 15.0106 18.3873 15.4227C17.8461 15.8299 17.2402 16.2073 16.5698 16.5549C15.9044 16.9025 15.1868 17.1831 14.4171 17.3966C13.6474 17.6052 12.843 17.7095 12.0037 17.7095ZM12.0037 16.4804C12.5748 16.4804 13.1136 16.3712 13.6201 16.1527C14.1266 15.9342 14.5711 15.6338 14.9534 15.2514C15.3358 14.869 15.6338 14.4271 15.8473 13.9255C16.0658 13.419 16.175 12.8827 16.175 12.3166C16.175 11.7356 16.0658 11.1943 15.8473 10.6927C15.6338 10.1862 15.3358 9.74426 14.9534 9.36685C14.5711 8.98448 14.1266 8.68653 13.6201 8.473C13.1136 8.25947 12.5748 8.1527 12.0037 8.1527C11.4178 8.1527 10.8715 8.25947 10.365 8.473C9.86344 8.68653 9.41899 8.98448 9.03166 9.36685C8.64929 9.74426 8.35133 10.1862 8.1378 10.6927C7.92427 11.1943 7.8175 11.7356 7.8175 12.3166C7.82247 12.8827 7.93172 13.419 8.14525 13.9255C8.36375 14.4271 8.66418 14.869 9.04656 15.2514C9.42893 15.6338 9.87089 15.9342 10.3724 16.1527C10.874 16.3712 11.4178 16.4804 12.0037 16.4804ZM12.0037 13.6425C11.6313 13.6425 11.3135 13.5133 11.0503 13.2551C10.7871 12.9919 10.6555 12.6791 10.6555 12.3166C10.6555 11.9491 10.7871 11.6363 11.0503 11.378C11.3135 11.1198 11.6313 10.9907 12.0037 10.9907C12.3712 10.9907 12.684 11.1198 12.9423 11.378C13.2055 11.6363 13.3371 11.9491 13.3371 12.3166C13.3371 12.6791 13.2055 12.9919 12.9423 13.2551C12.684 13.5133 12.3712 13.6425 12.0037 13.6425Z" fill="currentColor"/>
</svg>
`

let Eye1 = ({ size, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

Eye1.defaultProps = {
  size: 18,
};

Eye1 = React.memo ? React.memo(Eye1) : Eye1;

export default Eye1;