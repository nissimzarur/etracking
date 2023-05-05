import {View} from 'react-native';
import React from 'react';
import BoxProps from './interfaces';

const Box = ({children, ...restProps}: BoxProps) => {
  return <View {...restProps}>{children}</View>;
};

export default Box;
