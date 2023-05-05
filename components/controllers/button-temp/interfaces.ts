import { TextProps, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {label:string, type?:'delete'|'primary',labelProps?:TextProps};

export default ButtonProps;