import * as React from 'react';
import { Button,Text,TextInput, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import {Card} from 'react-native-paper';

export default class Book extends React.Component {
 
 
 static navigationOptions = {
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#00B5C9',
          },
          headerTitleStyle: {
            fontSize: 18,
            fontWeight:'bold'
          },
      };


  render() {
    var uri1= require('../assets/images.jpg')
           if(this.props.navigation.getParam('type','null')==='image/jpeg')
            uri1={
            uri: this.props.navigation.getParam('uri','null')
            }
  
    return (
      <View style={styles.container}>
        <View style={{height:'50%',backgroundColor:'#FFFFFF', alignItems:'center',justifyContent: 'center', }}>
          <Image source={require('../assets/images.jpg')} style={{width:125,height:125}}/>
        </View>
        <View style={{padding:24 }}>
          <Card style={{backgroundColor: '#00B5C9'}}>
            <Text style={styles.paragraph}>Title: {this.props.navigation.getParam('title','null')}</Text>
            <Text style={styles.paragraph}>Author: {this.props.navigation.getParam('aurthor','null')}</Text>
            <Text style={styles.paragraph}>Edition: {this.props.navigation.getParam('edition','null')}</Text>
            <Text style={styles.paragraph}>Description: abcdefg</Text>  
             <Button  title="Open"
                onPress={() => this.props.navigation.navigate('ReaderScreen', {
                    title: this.props.navigation.getParam('title','null'),
                    aurthor: this.props.navigation.getParam('aurthor','null'),
                    edition: this.props.navigation.getParam('edition','null'),
                    uri: this.props.navigation.getParam('uri','null'),
                  })}
              />
          </Card>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FFFFFF',
    justifyContent: 'center',
    alignItem:'center'
  },
  paragraph: {
    color: 'white',
    padding: 12,  
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
