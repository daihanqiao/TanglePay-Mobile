/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33333 5V6.66667H4.16667V15.8333H13.3333V11.6667H15V16.6667C15 16.8877 14.9122 17.0996 14.7559 17.2559C14.5996 17.4122 14.3877 17.5 14.1667 17.5H3.33333C3.11232 17.5 2.90036 17.4122 2.74408 17.2559C2.5878 17.0996 2.5 16.8877 2.5 16.6667V5.83333C2.5 5.61232 2.5878 5.40036 2.74408 5.24408C2.90036 5.0878 3.11232 5 3.33333 5H8.33333ZM17.5 2.5V9.16667H15.8333V5.34417L9.33917 11.8392L8.16083 10.6608L14.6542 4.16667H10.8333V2.5H17.5Z" fill="currentColor"/>
</svg>
`

let View = ({ size, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

View.defaultProps = {
  size: 18,
};

View = React.memo ? React.memo(View) : View;

export default View;
