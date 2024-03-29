import React from "react"
import { Text, StyleSheet} from "react-native"
import theme from "../theme"

const styles= StyleSheet.create({
    text:{
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary:{
        color: theme.colors.primary
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    },
    colorWhite:{
        color: theme.colors.white
    },
    bold:{
        fontWeight: theme.fontWeights.bold
    },
    subHeading:{
        fontSize:theme.fontSizes.subHeading
    },
    heading:{
        fontSize:theme.fontSizes.heading
    },
    bookingText:{
        fontSize:theme.fontSizes.bookingText
    },
    textAlignCenter:{
        textAlign: 'center'
    },
    textAlignLeft:{
        textAlign: 'left'
    },
    textAlignRight:{
        textAlign: 'right'
    },

})

export default function StyledText({children, align, color, fontSize, fontWeight, style, ...restOfProps}){
    const textStyles=[
        styles.text,
        align=='center' && styles.textAlignCenter,
        align=='right' && styles.textAlignRight,
        align=='left' && styles.textAlignLeft,
        color=='primary' && styles.colorPrimary,
        color=='secondary' && styles.colorSecondary,
        color=='white' && styles.colorWhite,
        fontSize=='heading' && styles.heading,
        fontSize=='bookingText' && styles.bookingText,
        fontSize=='subHeading' && styles.subHeading,
        fontWeight=='bold' && styles.bold,

        style


    ]
    return(
        <Text style={textStyles}{...restOfProps}>
            {children}
        </Text>
    )
}