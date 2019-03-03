import * as React from 'react';
import { AlertIOS,Text,TextInput,Button, View, StyleSheet, Image } from 'react-native';
import {Card} from 'react-native-paper';
import { Constants } from 'expo';
import { login} from '../service/userService'


export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
    this.handleLogin = this.handleLogin.bind(this);

  }

static navigationOptions = {
          title: 'Login',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#00B5C9',
          },
          headerTitleStyle: {
            fontSize: 18,
          },
      };

  handleLogin(){
    login(this.state.username,this.state.password,this.props.navigation);
      this.props.navigation.navigate('Home') 

  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>BooknBuy</Text>
        <Card>
          <View style={{ padding: 15 }}>
            <Text style={{ textAlign: 'center', fontSize: 24,padding:5 }}>
              Login 
            </Text>
            <TextInput
              style={styles.inputtext}
              placeholder="Username"
              onChangeText={text => this.setState({ username: text })}
            />
            <TextInput
              style={styles.inputtext}
              secureTextEntry={true}
              textContentType="password"
              placeholder="Password"
              onChangeText={text => this.setState({ password: text })} 
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 12}}>
              <Button  title="Login" onPress={this.handleLogin} /> 
              <Text style={{color:'white'}}>---</Text>
              <Button  title="sign up"
                onPress={() => this.props.navigation.navigate('SignupScreen')}
              />
            </View>
          </View>
        </Card>
      </View>
    );
  }
}


const styles=StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#00B5C9',
    padding: 8,
  },
  paragraph: {
    padding: 24,
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
   inputtext: {
    textAlign:'center',
    padding:12,
    fontSize: 18,
    innerHeight: 12
  }
});