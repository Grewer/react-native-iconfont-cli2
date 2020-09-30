/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

export type IconNames = 'close' | 'word';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'close':
      const IconClose = require('./IconClose').default;
      return <IconClose key="1" {...rest} />;
    case 'word':
      const IconWord = require('./IconWord').default;
      return <IconWord key="L1" {...rest} />;
  }

  return null;
};

const Svg = React.memo(IconFont)

export default Svg
