import { TextProps, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {label:string, labelProps?:TextProps};

export default ButtonProps;