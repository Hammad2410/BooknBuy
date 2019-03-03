import * as React from 'react';
import { Text,TextInput, View, StyleSheet, Image } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends React.Component {

  render() {
    return (
      <ActionButton buttonColor="rgba(231,76,60,1)" position='right' renderIcon={()=>(<Icon name="md-menu" style={styles.actionButtonIcon} />)} >
          <ActionButton.Item buttonColor='#9b59b6' title="Sign out" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-power" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Add Book" onPress={() => {this.props.navigation.navigate('AddBookScreen');}}>
            <Icon name="md-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Home" onPress={() => {}}>
            <Icon name="md-home" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    );
  }
}
const styles = StyleSheet.create({
 
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

})

