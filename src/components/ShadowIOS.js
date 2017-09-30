import React from 'react';
import { View, StyleSheet } from 'react-native';
/**
 * let’s create a shadow on an iOS element. Before we do so, let’s go over the four
available properties for adding a shadow (usually all used together to get the right effect):

shadowColor
shadowOffset
shadowOpacity
shadowRadius

SHADOWCOLOR: 
    shadowColor is the color of the shadow 
SHADOWOFFSET
    shadowOffsetis the distance from the element that the shadow should appear. It takes the
    following arguments:

    shadowOffset : {
        width: number,
        height: number
    }
SHADOWOPACITY
    shadowOpacity is the opacity of the shadow (number)
SHADOWRADIUS
    shadowRadius allows us to describe how spread out we would like our shadow to be. The
    smaller the number, the less spread out and denser the shadow is. The larger the number, the
    more spread out and the less dense it will be
 */
export default class BoxShadowIOS extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <View style={styles.box}></View>
    }
}


const styles = StyleSheet.create({
    box: {
        backgroundColor: 'red',
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 10
    }
})