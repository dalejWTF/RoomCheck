import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import Constants from 'expo-constants';
import theme from "../theme";


const styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight+10,       
    },
    text:{
        color: theme.appBar.primaryText
    }
})

const AppBar= () =>{
    return (
        <View style={styles.container}>
            
        </View>
    )
}

export default AppBar