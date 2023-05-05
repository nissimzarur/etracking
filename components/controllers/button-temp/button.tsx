import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import Styles from './button.styles';
import ButtonProps from './interfaces';
import Text from '../text-temp/text';

const Button = ({
  children,
  label,
  type = 'primary',
  labelProps,
  ...props
}: ButtonProps) => {
  let buttonStyle: StyleProp<ViewStyle> = {
    ...Styles.button, ...(type == 'delete' ? Styles.delete : null),
  };
  let buttonTextStyle: StyleProp<TextStyle> = {...Styles.buttonText};
  const isDisabled = props.disabled || false;

  if (isDisabled) buttonStyle = {...buttonStyle, ...Styles.buttonDiabled};

  const buttonStyleProps: any = props.style?.valueOf();
  const textStyleProps: any = labelProps?.style?.valueOf();

  if (buttonStyleProps) {
    buttonStyle = {
      ...buttonStyle,
      ...buttonStyleProps,
    };
  }
  if (textStyleProps) {
    buttonTextStyle = {
      ...buttonTextStyle,
      ...textStyleProps,
    };
  }

  return (
    <TouchableOpacity {...props} style={buttonStyle}>
      <Text style={buttonTextStyle}>{label || ''}</Text>
    </TouchableOpacity>
  );
};

export default Button;
