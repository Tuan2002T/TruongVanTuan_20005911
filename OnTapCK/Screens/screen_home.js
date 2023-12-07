
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';

export default function Screen_Home({ navigation }) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch('https://654e4f55cbc325355742b93e.mockapi.io/ThucHanh/Screen1')
      .then(response => response.json())
      .then(data => {
        setdata(data);
      })
  }, []);

  const checkAccount = () => {
    data.map(item => {
      if (item.username === username && item.password === password) {;
        return navigation.navigate('Screen_Todo', {item})
        
      }
      else {
        return console.log('no');
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text style= {{fontSize:50, fontWeight:'800', marginTop:200}}>Todo App</Text>
      <TextInput
        value={username}
        onChangeText={username => setUsername(username)}
        style={{
          backgroundColor: '#Cfcfcf',
          borderRadius: 10,
          width: '80%',
          marginTop: 20,
          height: 40
        }}
      />

        <TextInput
        value={password}
        onChangeText={password => setPassword(password)}
        style={{
          backgroundColor: '#Cfcfcf',
          borderRadius: 10,
          width: '80%',
          marginTop: 20,
          height: 40
        }}
        />

      <Pressable onPress={() => checkAccount()}
        style={{backgroundColor:'gray', padding:10, borderRadius:10, marginTop:50,width:200, alignItems:'center'}}>
            <Text style={{color:'white', fontSize:20}}>Bắt đầu</Text>
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
