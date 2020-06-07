import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header, Button} from 'react-native-elements';

export default class WriteScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'purple'}
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent = {{
                        text : 'iSleep Stories',
                        style : { color: 'white', fontSize: 20}
                    }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <TextInput 
                    placeholder="Story Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="Author"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>
                
                <Button
                    title="Submit"
                    buttonStyle={styles.submitButton}
                    containerStyle={{width: 80, height:40, alignSelf: "center"}}
                    raised
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title:{
    height: 40,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
    paddingLeft: 5
},
author: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    paddingLeft: 5
},
storyText: {
    height: 250,
    borderWidth: 2,
    margin: 10,
    paddingLeft: 5
},
submitButton:{
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'purple',
    width: 80,
    height: 40
},
buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
}
});