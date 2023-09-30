import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
      >LOGIN</Text>
      <View style={styles.inputName}>
        <Image
          style={{ width: 30, height: 30 }}
          source={
            require('./assets/user.png')
          } />
        <TextInput style={styles.name} type='text' placeholder='Name' />
      </View>
      <View style={styles.inputpass}>
        <Image
          style={{ width: 30, height: 30 }}
          source={
            require('./assets/lock.png')
          } />
        <TextInput style={styles.pass} type='text' placeholder='Password' />
        <Image
          style={{ width: 30, height: 30, marginRight: 10 }}
          source={
            require('./assets/eye.png')
          } />
      </View>
      <TouchableHighlight>
        <View style={styles.btnLogin}>
          <Text style={styles.Text}>LOGIN</Text>
        </View>
      </TouchableHighlight>
      <Text style={{
        marginTop: 50,
        fontSize: 20,
        fontWeight: 'bold',
      }}>CREATE ACCOUNT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6C700',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: -250,
    marginTop: 70,
    marginBottom: 50,
  },
  inputName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D8B93B',
    padding: 10,
    margin: 20,
    border: '1px solid White'
  },
  name: {
    border: 'none',
    backgroundColor: '#D8B93B',
    width: 310,
    height: 35,
    marginLeft: 10,
  },
  inputpass: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D8B93B',
    padding: 10,
    border: '1px solid White'
  },
  pass: {
    border: 'none',
    backgroundColor: '#D8B93B',
    width: 270,
    height: 35,
    marginLeft: 10,
  },
  btnLogin: {
    backgroundColor: '#000',
    width: 370,
    height: 50,
    marginTop: 70,
    justifyContent: 'center',
  },
  Text:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  }
});
