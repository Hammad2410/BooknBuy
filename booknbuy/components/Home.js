import React,{Component} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { bookref } from '../service/userService';
import Menu from './Menu.js';
import ItemComponent from './ItemComponent.js'

export default class Home extends Component {
    constructor(props)
    {
      super(props)
        this.state={
          books:[]
        }
    }

    static navigationOptions = {
          title: 'List of Available Books',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#00B5C9',
          },
          headerTitleStyle: {
            fontSize: 18,
            fontWeight:'bold'
          },
      };
  
  componentDidMount() {
    let currentComponent = this;

    bookref.on("value", function(snapshot) {
      console.log(snapshot.val());
      let data = snapshot.val();
      let books = Object.values(data);
      currentComponent.setState({books});
    });
  }

  listenForItems=(bookRef) => {
    bookRef.on("value", function(snapshot) {
      console.log(snapshot.val());
      let data = snapshot.val();
      let books = Object.values(data);
      this.books=books;
    });
  }

  render() {
    return (
      <View style={styles.container}>

        {
          this.state.books.length > 0
            ? <ItemComponent items={this.state.books} navigation={this.props.navigation} />
            : <Text>No items</Text>
        }

        <Menu navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
})