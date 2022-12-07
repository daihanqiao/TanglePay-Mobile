/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20C10.9053 20 9.87004 19.7895 8.89432 19.3684C7.91916 18.9474 7.07004 18.3753 6.34695 17.6522C5.62442 16.9297 5.05263 16.0808 4.63158 15.1057C4.21053 14.13 4 13.0947 4 12C4 10.8912 4.21053 9.85263 4.63158 8.88421C5.05263 7.91579 5.62442 7.07004 6.34695 6.34695C7.07004 5.62442 7.91916 5.05263 8.89432 4.63158C9.87004 4.21053 10.9053 4 12 4C13.1088 4 14.1474 4.21053 15.1158 4.63158C16.0842 5.05263 16.9297 5.62442 17.6522 6.34695C18.3753 7.07004 18.9474 7.91579 19.3684 8.88421C19.7895 9.85263 20 10.8912 20 12C20 13.0947 19.7895 14.13 19.3684 15.1057C18.9474 16.0808 18.3753 16.9297 17.6522 17.6522C16.9297 18.3753 16.0842 18.9474 15.1158 19.3684C14.1474 19.7895 13.1088 20 12 20ZM15.0947 8.90526H17.9579C17.5088 8.02105 16.9159 7.28758 16.1794 6.70484C15.4422 6.12267 14.5895 5.7193 13.6211 5.49474C13.9439 5.98597 14.2316 6.52267 14.4842 7.10484C14.7368 7.68758 14.9404 8.28772 15.0947 8.90526ZM10.1895 8.90526H13.8105C13.614 8.20351 13.3651 7.55425 13.0636 6.95747C12.7615 6.36126 12.407 5.80351 12 5.28421C11.593 5.80351 11.2387 6.36126 10.9373 6.95747C10.6352 7.55425 10.386 8.20351 10.1895 8.90526ZM5.51579 13.8316H8.65263C8.59649 13.5228 8.55439 13.2174 8.52632 12.9154C8.49825 12.6139 8.48421 12.3088 8.48421 12C8.48421 11.6912 8.49825 11.3858 8.52632 11.0838C8.55439 10.7823 8.59649 10.4772 8.65263 10.1684H5.51579C5.43158 10.4491 5.36842 10.7439 5.32632 11.0526C5.28421 11.3614 5.26316 11.6772 5.26316 12C5.26316 12.3228 5.28421 12.6386 5.32632 12.9474C5.36842 13.2561 5.43158 13.5509 5.51579 13.8316ZM10.3789 18.4842C10.0561 18.0211 9.76505 17.4947 9.50568 16.9053C9.24575 16.3158 9.04561 15.7123 8.90526 15.0947H6.04211C6.49123 15.9649 7.08772 16.6984 7.83158 17.2952C8.57544 17.8914 9.42456 18.2877 10.3789 18.4842ZM6.04211 8.90526H8.90526C9.05965 8.28772 9.26316 7.68758 9.51579 7.10484C9.76842 6.52267 10.0561 5.98597 10.3789 5.49474C9.39649 5.7193 8.54035 6.12267 7.81053 6.70484C7.0807 7.28758 6.49123 8.02105 6.04211 8.90526ZM12 18.7158C12.4351 18.1544 12.7966 17.5826 13.0846 17.0004C13.3721 16.4177 13.614 15.7825 13.8105 15.0947H10.1895C10.386 15.7965 10.6282 16.4385 10.9162 17.0206C11.2036 17.6034 11.5649 18.1684 12 18.7158ZM9.91579 13.8316H14.0842C14.1404 13.5228 14.1825 13.2211 14.2105 12.9263C14.2386 12.6316 14.2526 12.3228 14.2526 12C14.2526 11.6772 14.2386 11.3684 14.2105 11.0737C14.1825 10.7789 14.1404 10.4772 14.0842 10.1684H9.91579C9.85965 10.4772 9.81754 10.7789 9.78947 11.0737C9.7614 11.3684 9.74737 11.6772 9.74737 12C9.74737 12.3228 9.7614 12.6316 9.78947 12.9263C9.81754 13.2211 9.85965 13.5228 9.91579 13.8316ZM13.6211 18.4842C14.5754 18.2877 15.4246 17.8914 16.1684 17.2952C16.9123 16.6984 17.5088 15.9649 17.9579 15.0947H15.0947C14.9263 15.7123 14.7158 16.3192 14.4632 16.9154C14.2105 17.5121 13.9298 18.0351 13.6211 18.4842ZM15.3474 13.8316H18.4842C18.5684 13.5509 18.6316 13.2561 18.6737 12.9474C18.7158 12.6386 18.7368 12.3228 18.7368 12C18.7368 11.6772 18.7158 11.3614 18.6737 11.0526C18.6316 10.7439 18.5684 10.4491 18.4842 10.1684H15.3474C15.4035 10.4772 15.4456 10.7823 15.4737 11.0838C15.5018 11.3858 15.5158 11.6912 15.5158 12C15.5158 12.3088 15.5018 12.6139 15.4737 12.9154C15.4456 13.2174 15.4035 13.5228 15.3474 13.8316Z" fill="currentColor"/>
</svg>
`

let Lang = ({ size, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

Lang.defaultProps = {
  size: 18,
};

Lang = React.memo ? React.memo(Lang) : Lang;

export default Lang;
