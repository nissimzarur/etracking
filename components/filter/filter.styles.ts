import systemColors from "@tracking/assets/styles/system-colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    filterBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:90,
        backgroundColor:systemColors.filter.background,
        paddingBottom:5,
        paddingTop:5,
        paddingRight:10,
        paddingLeft:10,
        borderRadius:20,
    },
    title:{
        fontWeight:'bold'
    }
})