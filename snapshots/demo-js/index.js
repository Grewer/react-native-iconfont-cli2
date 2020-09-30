/* eslint-disable */

import React from 'react';


const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'close':
      const IconClose = require('./IconClose');
      return <IconClose key="1" {...rest} />;
    case 'word':
      const IconWord = require('./IconWord');
      return <IconWord key="L1" {...rest} />;
  }

  return null;
};

const Svg = React.memo(IconFont)

export default Svg
