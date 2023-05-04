import systemColors from "@tracking/assets/styles/system-colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    sectionTitleBox:{
        backgroundColor:systemColors.section.header.background,
        fontSize:14
    },
    sectionTitle:{
        width:'90%',
        alignSelf:'center'
    },
    separator:{
        borderBottomColor:'black',
        borderWidth:0.2
    }
})