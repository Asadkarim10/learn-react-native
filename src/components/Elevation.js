import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
/**
 * If you are looking to add a drop shadow to a View element, there are separate ways to do this
depending on what platform you are on.
If you are on Android, you use "** elevation **" which uses Android's underlying elevation API.
This adds a drop shadow to the item and affects z-order (z-index) for overlapping views.
If you are on iOS you use ShadowPropTypesIOS for drop shadows, which will only add a
shadow and will not affect the z-order.

The available properties available for ShadowPropTypesIOS are
• shadowColor
• shadowOffset
• shadowOpacity
• shadowRadius
The available properties available for elevation are
• number(0 to infinity)
 */

export default class Elevation extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={style.parent}>
                <View style={[style.child, style.child2]} />
                <View style={[style.child, style.child1]} />
                <View style={[style.child, style.child3]} />
            </View>
        )
    }
}


const style = StyleSheet.create({
    parent: {
        width: 300,
        height: 200,
        backgroundColor: '#cccccc',
        paddingLeft: 40
    },
    child: {
        width: 150,
        height: 150,
        position: 'absolute'
    },
    child1: {
        backgroundColor: 'red',
        top: 0,
        left: 0,
        elevation: 1
    },
    child2: {
        backgroundColor: 'orange',
        top: 20,
        left: 20,
        elevation: 2
    },
    child3: {
        backgroundColor: 'blue',
        top: 40,
        left: 40,
        elevation: 3
    }
})