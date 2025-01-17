/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_2598_7018" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
<rect width="16" height="16" fill="currentColor"/>
</mask>
<g mask="url(#mask0_2598_7018)">
<path d="M3.37647 15C2.99412 15 2.66912 14.8662 2.40147 14.5985C2.13382 14.3309 2 14.0059 2 13.6235V3.37647C2 2.99412 2.13382 2.66912 2.40147 2.40147C2.66912 2.13382 2.99412 2 3.37647 2H8.21324V3.14706H3.37647C3.32549 3.14706 3.27451 3.17255 3.22353 3.22353C3.17255 3.27451 3.14706 3.32549 3.14706 3.37647V13.6235C3.14706 13.6745 3.17255 13.7255 3.22353 13.7765C3.27451 13.8275 3.32549 13.8529 3.37647 13.8529H13.6235C13.6745 13.8529 13.7255 13.8275 13.7765 13.7765C13.8275 13.7255 13.8529 13.6745 13.8529 13.6235V8.78676H15V13.6235C15 14.0059 14.8662 14.3309 14.5985 14.5985C14.3309 14.8662 14.0059 15 13.6235 15H3.37647ZM6.76029 11.0426L5.95735 10.2397L13.05 3.14706H10.0294V2H15V6.97059H13.8529V3.95L6.76029 11.0426Z" fill="white"/>
</g>
</svg>
`

let Excel = ({ size, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

Excel.defaultProps = {
  size: 18,
};

Excel = React.memo ? React.memo(Excel) : Excel;

export default Excel;
