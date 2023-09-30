import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableHighlight  } from 'react-native';

export default function Page1_c() {
  return (
    <View style={styles.container}>
      <h1 style={
       styles.title
      }>CODE</h1>
      <Text style={styles.Text1}>VERIFICATION</Text>
      <Text style={styles.Text2}>Enter ontime password sent on <br/> ++849092605798</Text>
      <View style={styles.otpinput}> 
        <TextInput style={styles.otp} type="text"/>
        <TextInput style={styles.otp} type="text"/>
        <TextInput style={styles.otp} type="text"/>
        <TextInput style={styles.otp} type="text"/>
        <TextInput style={styles.otp} type="text"/>
        <TextInput style={styles.otp} type="text"/>
      </View>

       <TouchableHighlight>
        <View style={styles.button}>
          <Text style={styles.Text3}>VERIFY CODE</Text>
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
    // justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 55,
    color: '#000',
    margin: 20,
    paddingTop: 100,
  },
  Text1:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    paddingTop: 30,
  },
  Text2:{
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
    paddingTop: 40,
    textAlign: 'center',
  },
  Text3:{
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  otpinput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  otp: {
    width: 50,
    height: 50,
    border: '1px solid #000',
    textAlign: 'center',
    marginTop: 40,
  },
  button:{
    backgroundColor: '#E3C000',
    color: '#fff',
    width: 350,
    height: 50,
    border: 'none',
    marginTop: 50,
    justifyContent: 'center',
  }
});