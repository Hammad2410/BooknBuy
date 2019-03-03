import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  itemtext: {
    paddingLeft: 12,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
  
  
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.itemsList}>
        {this.props.items.map((item, index) => {
        var uri1= require('../assets/images.jpg')
           if(item.type==='image/jpeg')
            uri1={
            uri: item.uri 
            }
          return (
            <View key={index} style={{ flex: 1, flexDirection: 'row' }}>
              <Image source={ uri1} style={{width:75,height:75}}/>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('BookScreen', {
                    title: item.title,
                    aurthor: item.aurthor,
                    edition: item.edition,
                    uri: item.uri,
                    type: item.type,
                  });
                }}>
                <Text style={styles.itemtext}>{item.title}</Text>
                <Text style={{padding:12}}>by {item.aurthor} </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

