import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from "../../conts/colors";

const Input = ({
    label,
    iconName,
    error,
    password,
    onFocus = () => {}, ...props

}) =>{

    const [isFocused, setIsFocused] = React.useState(false);

    return (
    <View style={{marginBottom: 20}}>
        <Text style = {style.label}>{label}</Text>
        <View style={[style.InputContainer, 
            {
                borderColor: error 
                ? COLORS.red: isFocused 
                ? COLORS.darkBlue
                :COLORS.light
                },
                ]}>
            <Icon name={iconName} style={{fontSize: 22, color:COLORS.darkBlue, marginRight: 10}}/>
            <TextInput 
            autoCorrect={false}
            onFocus={()=>{
                onFocus();
                setIsFocused(true);
            }} 
            onBlur={()=>{
                setIsFocused(false);
            }}
            style={{color: COLORS.darkBlue, flex: 1}} 
            {...props}
            />
        </View>
        {error && (
            <Text style={{color: COLORS.red, fontSize: 12, marginTop: 7 }}>{error}</Text>
        )}
    </View>
    );
};

const style = StyleSheet.create({label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
},
    InputContainer:{
        height: 55,
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center',

    }
});

export default Input;