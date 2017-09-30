import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DynamicStyle extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <View>
                <Text style={[
                    styles.fontSize,
                    styles.color,
                    this.props.bgColor && styles.bgColor
                ]}>
                    Multiple Style in React Native
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fontSize: {
        fontSize: 20
    },
    color: {
        color: 'green'
    },
    bgColor: {
        backgroundColor: 'lightgray'
    }
})