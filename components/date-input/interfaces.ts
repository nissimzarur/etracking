import { TextInputProps } from "react-native";

export default interface DateInputProps extends TextInputProps{
    // onChange:({date}:{date:string})=>void;
    invalid?:boolean;
    // value?:string
}