import React, { Component } from 'react';

import { View, Text } from 'react-native';
/**
* View component is like div tag in html. it just a container component
*/

/**
 * Text component is like span tag in html. it just a Text component when ever you want to write text you must wrap it to Text
 Component
 */
export default class HelloWorld extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Container>
                <H1 style={{ color: 'red' }}> Hello World </H1>
            </Container>
        )
    }
}