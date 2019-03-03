import React from 'react';
import { StyleSheet, View } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import { Constants } from 'expo';

export default class Reader extends React.Component {

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
    return (
      <View style={styles.container}>
        <PDFReader
          source={{ uri: this.props.navigation.getParam('uri','null') }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});