/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 6.75C15.0369 6.75 14.25 7.53693 14.25 8.5C14.25 9.46307 15.0369 10.25 16 10.25C16.9631 10.25 17.75 9.46307 17.75 8.5C17.75 7.53693 16.9631 6.75 16 6.75ZM16 21.75C15.0369 21.75 14.25 22.5369 14.25 23.5C14.25 24.4631 15.0369 25.25 16 25.25C16.9631 25.25 17.75 24.4631 17.75 23.5C17.75 22.5369 16.9631 21.75 16 21.75ZM16 14.25C15.0369 14.25 14.25 15.0369 14.25 16C14.25 16.9631 15.0369 17.75 16 17.75C16.9631 17.75 17.75 16.9631 17.75 16C17.75 15.0369 16.9631 14.25 16 14.25Z" fill="currentColor" stroke="#333333" stroke-width="0.5"/>
</svg>
`

let More = ({ size, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

More.defaultProps = {
  size: 18,
};

More = React.memo ? React.memo(More) : More;

export default More;
