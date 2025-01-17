/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.8207 2.17934C21.9836 2.3423 22.0413 2.58296 21.9698 2.80207L15.8474 21.5776C15.7696 21.8162 15.554 21.9832 15.3034 21.9988C15.0529 22.0144 14.8182 21.8756 14.7113 21.6484L11.446 14.7097C11.3547 14.5156 11.3716 14.2879 11.4906 14.1094L14.6905 9.30953L9.89063 12.5094C9.71215 12.6284 9.48442 12.6453 9.29033 12.554L2.35156 9.28867C2.12444 9.18179 1.98556 8.9471 2.00119 8.69658C2.01683 8.44605 2.1838 8.23044 2.42244 8.15262L21.1979 2.03018C21.417 1.95873 21.6577 2.01638 21.8207 2.17934ZM4.26992 8.83813L9.49898 11.2989L16.5583 6.59263C16.8012 6.43075 17.1245 6.46276 17.3309 6.66913C17.5372 6.8755 17.5693 7.19883 17.4074 7.44166L12.7011 14.501L15.1619 19.7301L20.4322 3.56783L4.26992 8.83813Z" fill="currentColor"/>
</svg>
`

let Share = ({ size, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

Share.defaultProps = {
  size: 18,
};

Share = React.memo ? React.memo(Share) : Share;

export default Share;
