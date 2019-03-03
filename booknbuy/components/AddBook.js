import * as React from 'react';
import {
  Text,
  Button,
  TextInput,
  View,
  Picker,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { addBook } from '../service/userService';
import Icon from 'react-native-vector-icons/Ionicons';
//import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import FilePickerManager from 'react-native-file-picker';
import { ImagePicker, DocumentPicker } from 'expo';
import Menu from './Menu.js';
import {Card} from 'react-native-paper';
import DialogInput from 'react-native-dialog-input';

export default class AddBook extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      title: '',
      aurthor: [],
      edition: '',
      file: null,
      type: 'application/pdf',
      isDialogVisible: false,
    };
  }

  static navigationOptions = {
          title: 'Add Book',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#00B5C9',
          },
          headerTitleStyle: {
            fontSize: 18,
          },
      };

  getFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    console.log(result);

    if (!result.cancelled) {
      this.setState({ file: result.uri });
    }

    console.log('the file is ',result);
    console.log(this.state.file);
    //alert(this.state.type);
  };

  handleAddBook = () => {
    if (this.file !== null) {
      if(this.title !== null)
      addBook(
        this.state.title,
        this.state.aurthor,
        this.state.edition,
        this.state.file,
        this.state.type,
      );
      else
        alert('Enter Title');
    }
    else 
      this.getfile;
  };

  render() {
    return (
      <View style={styles.container}>
        <Card>
        <View style={{ padding: 15 }}>
        <Text style={styles.paragraph}>Add book</Text>
        <TextInput
          style={styles.inputtext}
          placeholder="Title"
          onChangeText={text => this.setState({ title: text })}
        />
        
        <Button title=" Add " onPress={()=>{this.setState({isDialogVisible: true})}} />
        <DialogInput isDialogVisible={this.state.isDialogVisible}
            title={"Add Author"}
            message={this.state.aurthor}
            hintInput ={"Author"}
            submitInput={ (inputText) => {this.state.aurthor.push(inputText)}}
            closeDialog={ () => {this.setState({isDialogVisible: false})}}>
        </DialogInput>
        <TextInput
          style={styles.inputtext}
          placeholder="Description"
          onChangeText={text => this.setState({ edition: text })}
        />
        <Picker
          selectedValue={this.state.type}
          style={{ height: 50, width: 100 ,alignSelf:'center'}}
          onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
          <Picker.Item label="PDF" value="application/pdf" />
          <Picker.Item label="Image" value="image/jpeg" />
          <Picker.Item label="Audio" value="audio/mpeg3" />
        </Picker>
        <View style={{ margin: 5,flexDirection: 'row', justifyContent: 'center' }}>
          <Button title=" Add " onPress={this.handleAddBook} />
          <Text style={{color:'white'}}>---</Text>
          <Button title=" Add file " onPress={this.getFile} />
        </View>
      </View>
      </Card>
      <Menu navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding:15,
    justifyContent:'center',
    backgroundColor:'#00B5C9', 
    flex:1
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputtext: {
    textAlign:'center',
    padding:12,
    fontSize: 18,
    innerHeight: 12
  }
});
