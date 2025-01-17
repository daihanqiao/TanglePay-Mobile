/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.16663 1.6665C13.3066 1.6665 16.6666 5.0265 16.6666 9.1665C16.6666 13.3065 13.3066 16.6665 9.16663 16.6665C5.02663 16.6665 1.66663 13.3065 1.66663 9.1665C1.66663 5.0265 5.02663 1.6665 9.16663 1.6665ZM9.16663 14.9998C12.3891 14.9998 15 12.389 15 9.1665C15 5.94317 12.3891 3.33317 9.16663 3.33317C5.94329 3.33317 3.33329 5.94317 3.33329 9.1665C3.33329 12.389 5.94329 14.9998 9.16663 14.9998ZM16.2375 15.059L18.595 17.4157L17.4158 18.5948L15.0591 16.2373L16.2375 15.059Z" fill="currentColor"/>
</svg>
`

let Search = ({ size, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

Search.defaultProps = {
  size: 18,
};

Search = React.memo ? React.memo(Search) : Search;

export default Search;
