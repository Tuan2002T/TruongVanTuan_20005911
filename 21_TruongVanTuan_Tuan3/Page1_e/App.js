import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
// import { RadioButton } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>
      <TextInput style={styles.formRegister} placeholder='Name' type='text' />
      <TextInput style={styles.formRegister} placeholder='Phone' type='text' />
      <TextInput style={styles.formRegister} placeholder='Email' type='text' />
      <View style={styles.inputPass}>
        <TextInput style={styles.TextPass} placeholder='Password' type='text' />
        <Image style={{
          width: 30,
          height: 30,
        }} source={
          require('./assets/eye.png')
        } />
      </View >
      <TextInput style={styles.formRegister} placeholder='Birtday' type='text' />

      <View style={{
        textAlign: 'left',
        width: 360,
        padding: 10,
      }}>
      <RadioForm
        buttonColor={'#000000'}
        selectedButtonColor={'#000000'}
        radio_props={radio_props}
        initial={0}
        formHorizontal={true}

      />
      </View>
      
      <TouchableHighlight>
        <View style={styles.btnRegisTer}>
          <Text style={styles.Text}>REGISTER</Text>
        </View>
      </TouchableHighlight>
      <Text>When you agree to terms and conditions</Text>
    
    </View>

  );
}   
var radio_props = [
  { label: 'Male   ', value: 0 },
  { label: 'Female', value: 1 },
  
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 40,
  },
  formRegister: {
    width: 360,
    height: 50,
    margin: 10,
    padding: 10,
    fontSize: 20,
    backgroundColor: '#C9E0D0',
    border: 'none',
  },
  inputPass: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 360,
    height: 50,
    margin: 10,
    padding: 10,
    backgroundColor: '#C9E0D0',
  },
  TextPass: {
    width: 290,
    height: 30,
    fontSize: 20,
    backgroundColor: '#C9E0D0',
    border: 'none',
  },
  btnRegisTer: {
    width: 360,
    height: 50,
    backgroundColor: '#C34E3B',
    fontWeight: 'bold',
    color: '#fff',
    border: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  Text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});