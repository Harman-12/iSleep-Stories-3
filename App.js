import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';

export default function App() {
  return (
    
      <AppContainer />
    
  );
}

const TabNavigator = createMaterialTopTabNavigator({
  WriteStory: WriteScreen,
  ReadStory: ReadScreen
})

const AppContainer = createAppContainer(TabNavigator);

