import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
/**
 * If you want to give multiple style on one component all you need to pass array on object on style props
 */

export default class MultipleStyle extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <View>
                <Text style={[
                    styles.fontSize,
                    styles.color
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
        color: 'blue'
    }
})