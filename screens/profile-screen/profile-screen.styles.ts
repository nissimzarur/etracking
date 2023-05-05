import { StyleSheet } from "react-native";

export default StyleSheet.create({
    rowBoxContainer:{
        height:'100%',
        alignItems:'center',
        justifyContent:'center',      
        rowGap:20
    },
    rowBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'70%',
        alignItems:'center',
        borderBottomColor:'#D9D9D9',
        borderBottomWidth:1,
        paddingBottom:10
    },
    rowTitle:{
        fontSize:22
    },
    rowValue:{
        fontSize:22,
        fontWeight:'bold'

    }
})