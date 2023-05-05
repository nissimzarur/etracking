import {Text as RNText, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import TextProps from './interfaces';
import Styles from './styles';

const Text = ({children, ...props}: TextProps) => {
  let textStyle: StyleProp<TextStyle> = {...Styles.text};

  const styleProps: any = props.style?.valueOf();

  if (styleProps) {
    textStyle = {...textStyle, ...styleProps};
  }

  return (
    <RNText {...props} style={textStyle}>
      {children}
    </RNText>
  );
};

export default Text;
