/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.70345 22H17.2966C18.1916 22 18.8659 21.7651 19.3195 21.2954C19.7732 20.832 20 20.1525 20 19.2569V9.64678C20 8.74495 19.7732 8.06231 19.3195 7.59887C18.8659 7.13543 18.1916 6.90371 17.2966 6.90371H14.6667V8.05918H17.269C17.7778 8.05918 18.1701 8.20009 18.446 8.48192C18.728 8.75748 18.869 9.16768 18.869 9.71254V19.1912C18.869 19.736 18.728 20.1462 18.446 20.4218C18.1701 20.7036 17.7778 20.8445 17.269 20.8445H6.73103C6.20996 20.8445 5.81149 20.7036 5.53563 20.4218C5.2659 20.1462 5.13103 19.736 5.13103 19.1912V9.71254C5.13103 9.16768 5.2659 8.75748 5.53563 8.48192C5.81149 8.20009 6.20996 8.05918 6.73103 8.05918H9.34253V6.90371H6.70345C5.80843 6.90371 5.1341 7.13543 4.68046 7.59887C4.22682 8.05605 4 8.73869 4 9.64678V19.2569C4 20.165 4.22682 20.8477 4.68046 21.3048C5.1341 21.7683 5.80843 22 6.70345 22ZM12 15.9502C12.0736 15.9502 12.141 15.9377 12.2023 15.9126C12.2697 15.8876 12.3372 15.8375 12.4046 15.7623L15.6414 12.5214C15.7517 12.4149 15.8069 12.2928 15.8069 12.155C15.8069 12.0047 15.7579 11.8826 15.6598 11.7886C15.5617 11.6884 15.4391 11.6383 15.292 11.6383C15.1387 11.6383 15.01 11.6978 14.9057 11.8168L13.3425 13.4796L12.5241 14.3438L12.5609 12.9723V2.56364C12.5609 2.41334 12.5057 2.28182 12.3954 2.16909C12.2851 2.05636 12.1533 2 12 2C11.8467 2 11.7149 2.05636 11.6046 2.16909C11.4943 2.28182 11.4391 2.41334 11.4391 2.56364V12.9723L11.4851 14.3438L10.6483 13.4796L9.08506 11.8168C8.98697 11.6978 8.85824 11.6383 8.69885 11.6383C8.55172 11.6383 8.42912 11.6884 8.33103 11.7886C8.23908 11.8826 8.1931 12.0047 8.1931 12.155C8.1931 12.2928 8.24521 12.4149 8.34943 12.5214L11.5954 15.7623C11.6628 15.8375 11.7272 15.8876 11.7885 15.9126C11.8559 15.9377 11.9264 15.9502 12 15.9502Z" fill="currentColor"/>
</svg>
`

let Into = ({ size, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

Into.defaultProps = {
  size: 18,
};

Into = React.memo ? React.memo(Into) : Into;

export default Into;
