import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';

export default function Page1_d() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <TextInput type='text' placeholder='Email' style={styles.input1} />

      <View style={styles.input2}>
        <TextInput type='text' placeholder='Password' style={styles.input3} />
        <Image style={
          {
            width: 30,
            height: 30,
            marginRight: 10,
          }
        } source={
          require('../assets/Page1_d/eye.png')
        } />
      </View>

      <TouchableHighlight>
        <View style={styles.btnLogin}>
          <Text style={styles.Text}>LOGIN</Text>
        </View>
      </TouchableHighlight>
      <Text style={{ fontWeight: 'bold', fontSize: 15 }}>When you agree to terms and conditions <br /></Text>
      <Text style={{ fontSize: 15, color: '#5D25FA' }}><br />For got your password?</Text>
      <Text style={{ fontSize: 15 }}><br />Or login with</Text>


      <View style={styles.mxh}>
        <View style={styles.Facebook}>
          <Image style={
            {
              width: 40,
              height: 40,
              backgroundColor: '#275A8D',
            }
          }
            source={
              require('../assets/Page1_d/Facebook.png')
            } />
        </View>
        <View style={styles.Zalo}>
          <Image style={
            {
              width: 30,
              height: 30,
              backgroundColor: '#1593C5',
            }
          }
            source={
              require('../assets/Page1_d/Zalo.png')
            } />
        </View>
        <View style={styles.Google}>
          <Image style={
            {
              width: 30,
              height: 30,
              backgroundColor: '#fff',
            }
          }
            source={
              require('../assets/Page1_d/Google.png')
            } />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 50,
    paddingBottom: 10,
  },
  input1:
  {
    width: 360,
    height: 50,
    backgroundColor: '#C9E0D0',
    border: 'none',
    padding: 10,
    paddingLeft: 20,
  },
  input2: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 20,
    marginTop: 40,
    backgroundColor: '#C9E0D0',
  },
  input3: {
    width: 286,
    height: 30,
    backgroundColor: '#C9E0D0',
    border: 'none',
  },
  btnLogin:{
    
      width: 360,
      height: 50,
      backgroundColor: '#C34E3B',
      border: 'none',
      marginTop: 50,
      marginBottom: 20,
    
  },
  Text:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 10,
  },
  mxh:{
    backgroundColor: '#fff',
    display: 'flex',
    height: 130,
    width: 360,
    flexDirection: 'row',
    marginTop: 50,
  },
  Facebook:{
    width: 120,
    height: 50,
    backgroundColor: '#275A8D',
    alignItems: 'center',
     justifyContent: 'center',
    border: '1px solid #275A8D',
  },
  Zalo:{
    width: 120,
    height: 50,
    backgroundColor: '#1593C5',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #1593C5',
  },
  Google:{
    width: 120,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #3177DE',
  }
});

