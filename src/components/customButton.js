import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
/**
 * TouchableHighlight 
A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view.

The underlay comes from wrapping the child in a new View, which can affect layout, and sometimes cause unwanted visual artifacts if not used correctly, for example if the backgroundColor of the wrapped view isn't explicitly set to an opaque color.

TouchableHighlight must have one child (not zero or more than one). If you wish to have several child components, wrap them in a View.
 */

export default class CustomButton extends React.Component {
    render() {
        return (
            <TouchableHighlight 
                onPress={this.props.onPress} 
                style={styles.buttonContainer}
                underlayColor={'#16A085'}>
                <Text style={styles.buttonText}>{this.props.title && this.props.title.toUpperCase()} </Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#16A085',
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        elevation: 10,
        borderRadius: 2
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

