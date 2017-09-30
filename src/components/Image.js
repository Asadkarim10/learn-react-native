import React from 'react';
import { View, Image } from 'react-native';

/**
 * in React native when we want to load image from folder we use
 * require() function and when we want to load image from URL we use
 * uri
 */
let localImage = require("../assets/react-native.png");
let URL = 'https://secure.meetupstatic.com/photos/event/3/8/0/c/global_450614348.jpeg'
export default class ImageComponent extends React.Component {
    render() {
        return (
            <View>
                <Image source={localImage} style={{ height: 200, width: 300 }} />
                <Image source={{ uri: URL }} style={{ height: 250, width: 300 ,resizeMode:"cover",marginVertical :20}} />
            </View>
        )
    }
}