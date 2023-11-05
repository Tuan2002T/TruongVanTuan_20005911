
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';

export default function Screen_01({ navigation }) {
  const [data1, setdata1] = useState([]);
 useEffect( () => {
    fetch('https://6544afd55a0b4b04436cbf81.mockapi.io/ttt/API_Screen_1')
    .then(response => response.json())
    .then(data => {
      setdata1(data);
    })
  },[]);

const [text, setText] = useState('');
  const checkName = () => {
    data1.map(item => {
      if (item.name === text) {
        // console.log('ok');
        return navigation.navigate('Screen_02', {item, data1})
      }
    })
    }
  return (
    <View style={styles.container}>
      <Image style={{ width: 270, height: 270, marginTop:50 }} source={require('../assets/Image.png')} />

      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#8353E2',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,

      }}>MANAGE YOUR<br/>TASK</Text>
      <View style={{width:'100%', alignItems:'center', justifyContent:'center'}}>
      <Image style={{ width: 25, height: 25, position:'absolute', left:30 }} source={require('../assets/mail.png')} />
        <TextInput value={text} onChangeText={setText} placeholder='Enter your name' placeholderTextColor={'#BCC1CA'} style={{ width: '90%', height: 50, border: '1px solid #9095A0', borderRadius: 10, paddingLeft: 40 }} />
      </View>


      <Pressable style={{ marginTop:150,width:200, height:40, backgroundColor:'#00BDD6', alignItems:'center', justifyContent:'center', borderRadius:10 }} onPress={() => checkName()}>
        <Text style={{fontSize:16, color:'#fff'}}>GET STARTED</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
