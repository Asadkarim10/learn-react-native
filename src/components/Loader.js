import React, { Component } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
/**
 * Displays a circular loading indicator.
 * animating?: boolean
 * Whether to show the indicator (true, the default) or hide it (false).
 * color -- The foreground color of the spinner (default is gray).
 * size props -- enum('small', 'large'), number 
    Size of the indicator (default is 'small'). Passing a number to the size prop is only supported on Android.
    
    IOS ONLY

    hidesWhenStopped?: bool #
    Whether the indicator should hide when not animating (true by default).
    */
export default class Loader extends React.Component {
    render() {
        let size = Platform.OS === 'android' ? 40 : "large"
        return <ActivityIndicator size={size} />
    }
}