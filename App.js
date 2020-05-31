import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';

export default class App extends React.Component  {
  render(){
  return (
    
      <AppContainer />
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator({
  WriteStory: {screen: WriteScreen},
  ReadStory: {screen: ReadScreen},
});

const AppContainer = createAppContainer(TabNavigator);

