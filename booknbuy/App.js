import * as React from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
  AppRegistry,
} from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// You can import from local files
import AssetExample from './components/AssetExample';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Reader from './components/Reader';
import Book from './components/Book';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const AppNavigator = createStackNavigator({
  //AddBookScreen: { screen: AddBook },
  LoginScreen: { screen: Login },
  HomeScreen: { screen: Home },
  SignupScreen: { screen: Signup },
  AddBookScreen: { screen: AddBook },
  ReaderScreen: { screen: Reader },
  BookScreen: { screen: Book },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
