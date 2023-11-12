
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList } from 'react-native';

export default function Screen_02({ navigation, route }) {
  const [item, setItem] = useState([]);
  const [text, setText] = useState('');
  const [idwork, setidwork] = useState();
  const check = () => {
    fetch(`https://654e4f55cbc325355742b93e.mockapi.io/ThucHanh/Screen1/${route.params?.item.id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://654e4f55cbc325355742b93e.mockapi.io/ThucHanh/Screen1/${route.params?.data.id}`)
      .then(response => response.json())
      .then(dataResponse => {
        setData(dataResponse);
        const ids = dataResponse.work.map(item => parseInt(item.id));
        const maxId = Math.max(...ids);
        setidwork((maxId + 1).toString());
        console.log("new id", maxId+1);
        console.log("dataResponse",dataResponse);
      });
  }, [])
  // console.log(idwork);
  const addJob = () => {
    const newJob = {
      id: idwork,
      job: text
    };
    // setData({...data, work: [...data.work, newJob]});
    fetch('https://654e4f55cbc325355742b93e.mockapi.io/ThucHanh/Screen1/' + data.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: data.id,
        work: [...data.work, newJob]
      })
    })
    console.log("oke");
    return newJob;
  }


  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 20
      }} >
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <Image
            style={{
              width: 45,
              height: 45,
              resizeMode: 'contain',
              borderRadius: 50,
              backgroundColor: '#D9CBF6',
              marginLeft: 5
            }}
            source={
              require('../assets/Rectangle.png')
            } />
          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', textAlign: 'center' }}>Hi </Text>
            <Text style={{ fontSize: 12, fontWeight: '700', textAlign: 'center', color: '#CFCFCF' }}>Have agrate day a head</Text>
          </View>
        </View>
        <Pressable onPress={() => navigation.goBack()}><Image style={{ width: 50, height: 50, marginRight: 10 }} source={require('../assets/left.png')} /></Pressable>
      </View>


      <View style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 50
      }}>
        <Image style={{
          width: 30,
          height: 30,
          position: 'absolute',
          left: 30
        }} source={require('../assets/Frame.png')} />
        <TextInput value={text} onChangeText={setText} placeholder='input your job' placeholderTextColor={'#cfcfcf'} style={{
          width: '90%',
          height: 40,
          border: '1px solid #9095A0',
          borderRadius: 5,
          paddingLeft: 40,
        }} />
      </View>
      <Pressable onPress={() => (addJob(), check())} ><Text>X</Text></Pressable>

      <Pressable style={{ marginTop: 150, width: 200, height: 40, backgroundColor: '#00BDD6', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }} 
      onPress={() => {
        const newJob = addJob();
       navigation.navigate('Screen_02', { item : {...data, work: [...data.work, newJob]}})}
       }>
        <Text style={{ fontSize: 16, color: '#fff' }}>FINISH</Text>
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
