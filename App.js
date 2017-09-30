import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';

import {
  HelloWorld, StyleText, MultipleStyle, DynamicStyle,
  Elevation, BoxShadowIOS, Loader, ButtonComponent, CustomButton,
  ImageComponent, BackgroundImage
} from "./src/components"

/**
 * React native Style Cheat 
 * https://github.com/vhpoet/react-native-styling-cheat-sheet
 */
export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Elevation />
        <HelloWorld />
        <StyleText />
        <MultipleStyle />
        <DynamicStyle bgColor={true} />
        <DynamicStyle />
        {Platform.OS === 'ios' && <BoxShadowIOS />}
        <Loader />
        <ButtonComponent />
        <CustomButton title="Custom Button" onPress={() => { console.log("CLICK ON CUSTOM BUTTON") }} />
        <ImageComponent />
        <BackgroundImage />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
    marginHorizontal: 20
  },
});
