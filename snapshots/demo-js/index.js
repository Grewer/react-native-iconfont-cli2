/* eslint-disable */

import React from 'react';

import IconClose from './IconClose';
import IconWord from './IconWord';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'close':
      return <IconClose key="1" {...rest} />;
    case 'word':
      return <IconWord key="L1" {...rest} />;
  }

  return null;
};

const Svg =  React.memo ? React.memo(IconFont) : IconFont;

export default Svg
