
import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import COLORS from '../../conts/colors';

const DetalleReserva = ({navigation,route}) => {

    const item =route.param;
    console.log(item);

    return( 
        
    <ScrollView showsVerticalScrollIndicator = {false}
    contentContainerStyle = {{backgroundColor: COLORS.white, paddingBottom: 20}}>
        <ImageBackground style = {style.headerImage}></ImageBackground>
    </ScrollView>
    );
};

const style = StyleSheet.create({
    headerImage:{
        height: 400,
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
        overflow: 'hidden',

    }
});

export default DetalleReserva;