import React from 'react';
import { View, Image, Text } from 'react-native';

/**
 * in React native when we want to load image from folder we use
 * require() function and when we want to load image from URL we use
 * uri
 * To Create a backgroundImage just use opening and closing tag of Image and between Image tag any thing that you want to show on Image
 */

let localImage = require("../assets/react-native.png");
export default class BackgroundImage extends React.Component {
    render() {
        return (
            <View>
                <Image source={localImage} style={{ height: 200, width: 300 }} >
                    <Text style={{ color: '#fff',textAlign:'center',fontSize: 20}}>Hello Worls</Text>
                </Image>
            </View>
        )
    }
}