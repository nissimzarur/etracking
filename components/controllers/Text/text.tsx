import {View, Text as RNText, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import TextProps from './interfaces';
import Styles from './styles';
import systemColors from '@tracking/assets/styles/system-colors';

const Text = ({children, ...props}: TextProps) => {
  let textStyle: StyleProp<TextStyle> = {...Styles};

  const styleProps: any = props.style?.valueOf();

  if (styleProps) {
    textStyle = {...styleProps}
  }

  return (
    <RNText {...props} style={textStyle}>
      {children}
    </RNText>
  );
};

export default Text;
