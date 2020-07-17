/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconClose from './IconClose';
import IconWord from './IconWord';

export type IconNames = 'close' | 'word';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
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
