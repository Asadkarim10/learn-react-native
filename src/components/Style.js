import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * sources 
 * 1) https://facebook.github.io/react-native/releases/0.23/docs/style.html
 * React Native doesn't implement CSS but instead relies on JavaScript to let you style your application
 * 
 * View Specific Style property
 * https://facebook.github.io/react-native/releases/0.23/docs/view.html#style
 * 
 * Text Component Specific Style property
 * https://facebook.github.io/react-native/releases/0.23/docs/text.html#style
 * 
 *  Styling Overview 
 * Every element has its own set of styles which can be applied to it,
 *  but may or may not be applicable to other types of elements. 
 * For example, Text elements and View elements both have their own different set of styles that can be applied. Text elements can receive a fontWeight (fontWeight refers to the thickness of the font) property while View elements cannot, and 
 * View elements can receive a flex(flex refers to the layout of a View, 
 * something we will cover in depth in the next chapter) properties while Text elements cannot, and so on and so forth. 
 * 
 * Properties which one work on Text Component
 * 
 *   color
    • fontFamily
    • fontSize
    • fontStyle
    • fontWeight
    • lineHeight
    • textAlign
    • textDecorationLine
    • textShadowColor
    • textShadowOffset
    • textShadowRadius
    
    Android only:
    • textAlignVertical

    iOS only:
    • letterSpacing
    • textDecorationColor
    • textDecorationStyle
    • writingDirection
    */


export default class StyleText extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View>
                <Text style={styles.text}> Some styleing with react native </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 25
    }
})