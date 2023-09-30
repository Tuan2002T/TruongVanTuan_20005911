import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{ width: 90, height: 100 }} source={
        require('./assets/lock.png')
      } />
      <Text style={styles.text1}>FORGET <br /> PASSWORD</Text>
      <Text style={styles.text2}>
        Provide your account's email for which you want to reset your password.
      </Text>
      <View style={styles.v1}>
        <Image style={{ width: 39, height: 39 }} source={
          require('./assets/mail.png')
        } />
        <TextInput type='text' placeholder='Email' style={styles.input1} />
      </View>
      <TouchableHighlight>
          <View style={styles.input2}>
            <Text style={styles.btn1}>NEXT</Text>
          </View>
        </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
    alignItems: 'center',
    paddingTop: 100,
    // justifyContent: 'center',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    margin: 20,
    padding: 24,
    textAlign: 'center'
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    padding: 20
  },
  v1: {
    display: 'flex',
    flexDirection: 'row',
    width: 350,
    height: 42,
    backgroundColor: '#C4C4C4',
  },
  input1: {
    width: 350,
    height: 40,
    border: 'none',
    backgroundColor: '#C4C4C4',
  },
  input2:{
    width: 350,
    height: 40,
    border: 'none',
    backgroundColor: '#E3C000',
    marginTop: 40,
    justifyContent: 'center',
  },
  btn1:{
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
