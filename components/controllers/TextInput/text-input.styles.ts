import systemColors from "@tracking/assets/styles/system-colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    input:{
        color: systemColors.textInput.text,
        borderColor:systemColors.textInput.border,
        fontSize:16,
        height:55,
        width:255,
        borderWidth:1,
        borderRadius:5
    }
})