import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity  } from 'react-native';

export default function Page2_a() {
  const input1 = 'a'; 
  const input2 = '123';
  const [count, setCount] = useState("");
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
function check(){
  if(input1 !== inputValue && input2 !== inputValue1){
    alert('Đăng nhập thất bại');
  }
  else{
    alert('Đăng nhập thành công');
  }
}
  return (
    
    <View style={styles.container}>
      <Text
        style={styles.title}
      >LOGIN</Text>
      <View style={styles.inputName}>
        <Image
          style={{ width: 30, height: 30 }}
          source={
            require('../assets/Page2_a/user.png')
          } />
        <TextInput value={inputValue}  onChangeText={text => setInputValue(text)} style={styles.name} type='text' placeholder='Name' />
      </View>
      <View style={styles.inputpass}>
        <Image
          style={{ width: 30, height: 30 }}
          source={
            require('../assets/Page2_a/lock.png')
          } />
        <TextInput value={inputValue1} onChangeText={text => setInputValue1(text)} style={styles.pass} type='text' placeholder='Password' />
        <Image
          style={{ width: 30, height: 30, marginRight: 10 }}
          source={
            require('../assets/Page2_a/eye.png')
          } />
      </View>
      <TouchableOpacity onPress={check} >
        <View style={styles.btnLogin}  >
          <Text style={styles.Text}>LOGIN</Text>
        </View>
      </TouchableOpacity>
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
