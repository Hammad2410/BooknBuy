import * as React from 'react';
import { Text,Button,TextInput, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo'; 
import {Card} from 'react-native-paper';
import { signup } from '../service/userService';

export default class Signup extends React.Component {

  constructor(prop)
  {
    super(prop);
    this.state={
        username: '',
        password: '',
        password1: '',
  }
  this.handleSubmit = this.handleSubmit.bind(this);
} 
   
static navigationOptions = {
          title: 'Sign Up',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#00B5C9',
          },
          headerTitleStyle: {
            fontSize: 18,
          },
      };

   
 handleSubmit()
 {
   signup(this.state.username,this.state.password,this.props.navigation);
 }  


  
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <View style={{ padding: 15 }}>
            <Text style={{ textAlign: 'center', fontSize: 24 }}>
              Signup             
            </Text>
            <TextInput style={styles.inputtext}  placeholder="Username" onChangeText={text => this.setState({ username: text })}/>
            <TextInput style={styles.inputtext} secureTextEntry={true} placeholder='Password' onChangeText={text=> this.setState({ password: text })  }/>
            <TextInput style={styles.inputtext} secureTextEntry={true} placeholder='Confirm Password' onChangeText={text=> this.setState({ password1: text }) }/>
            <View style={{justifyContent:'center'}}>
              <Button title='Register' onPress={this.handleSubmit}/>
            </View>
          </View>  
        </Card>
      </View>
    );
  }
}


const styles=StyleSheet.create({

    container:{
    padding:15,
    justifyContent:'center',
    backgroundColor:'#00B5C9', 
    flex:1
    },
    inputtext: {
    textAlign:'center',
    padding:12,
    fontSize: 18,
    innerHeight: 12
    }
});
