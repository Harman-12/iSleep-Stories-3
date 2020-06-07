import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'white'}
                    leftComponent={{ icon: 'menu', color: 'purple' }}
                    centerComponent = {{
                        text : 'iSleep Stories',
                        style : { color: 'purple', fontSize: 20}
                    }}
                    rightComponent={{ icon: 'home', color: 'purple' }}
                />
                <Text>Read a Story</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});