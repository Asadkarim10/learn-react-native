import React, { Component } from 'react';
import { Button, View } from 'react-native';
/**
 * A basic button component that should render nicely on any platform. Supports a minimal level of customization.
 */
export default class ButtonComponent extends Component {
    render() {
        return (
            <View>
                <Button
                    title={'Click'}
                    onPress={() => { console.log("Click") }} />
                <Button title="Disabled"
                    color="#841584"
                    disabled={true}
                    onPress={() => { console.log("Click") }}
                />
                <Button title="Learn More"
                    color="#003171"
                    accessibilityLabel={"use accessibilityLabel for those who can't see"}
                    onPress={() => { console.log("Click") }} />
            </View>
        )
    }
} 