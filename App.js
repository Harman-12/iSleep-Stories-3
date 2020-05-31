import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const TabNavigator = createMaterialTopTabNavigator({
  WriteStory: WriteScreen,
  ReadStory: ReadScreen
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
