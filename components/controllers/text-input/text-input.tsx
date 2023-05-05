import {TextInput as RNTextInput, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import TextInputProps from './interfaces';
import systemColors from '@tracking/assets/styles/system-colors';
import Styles from "./text-input.styles"
const TextInput = ({...props}: TextInputProps) => {
  let style:StyleProp<TextStyle> = {...Styles.input };
  const styleProps: any = props.style?.valueOf();

  if(styleProps){
    style = {
      ...style,
      ...styleProps
    }
  }

  return <RNTextInput {...props} style={style} placeholderTextColor={systemColors.textInput.placeholder}/>;
};

export default TextInput;
