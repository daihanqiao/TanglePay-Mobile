/* eslint-disable */

import React from 'react';
import { SvgCss } from 'react-native-svg';

const xml = `
<svg t="1645980101445" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1895" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128"><defs><style type="text/css"></style></defs><path d="M451.47 83.605a155.648 155.648 0 0 1 118.502 0.515l243.775 101.597c39.68 16.537 65.528 55.311 65.528 98.3v316.865a106.496 106.496 0 0 1-36.767 80.493L575.08 913.041c-40.147 34.778-99.782 34.657-139.787-0.284L170.242 681.25a106.496 106.496 0 0 1-36.44-80.208V284.43c0-43.326 26.249-82.334 66.384-98.653z m86.988 76.131a73.728 73.728 0 0 0-56.132-0.244L231.042 261.664a24.576 24.576 0 0 0-15.32 22.766v316.613a24.576 24.576 0 0 0 8.41 18.51l265.051 231.505c9.232 8.063 22.994 8.091 32.259 0.065L788.87 619.457a24.576 24.576 0 0 0 8.485-18.575V284.017c0-9.92-5.965-18.868-15.122-22.684z m-30.554 195.25c40.719 0 73.728 33.01 73.728 73.729 0 24.386-11.84 46.007-30.085 59.429 0.032 0.665 0.048 1.336 0.048 2.01v136.534c0 23.376-18.95 42.325-42.326 42.325-23.375 0-42.325-18.95-42.325-42.325V490.155l0.001-0.127c-19.76-13.226-32.769-35.75-32.769-61.313 0-40.72 33.01-73.728 73.728-73.728z" fill="currentColor" p-id="1896"></path></svg>
`

let Privacy = ({ size, ...rest }) => {
  return (
    <SvgCss xml={xml}  width={size} height={size} {...rest} />
  );
};

Privacy.defaultProps = {
  size: 18,
};

Privacy = React.memo ? React.memo(Privacy) : Privacy;

export default Privacy;