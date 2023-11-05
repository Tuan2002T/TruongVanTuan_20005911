
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList } from 'react-native';

export default function Screen_02({ navigation, route }) {
  // const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  // useEffect(() => {
  //   setData(route.params?.item);
  //   setData2(route.params?.item.work);
  // }, [route.params?.item])
  // console.log(data.work);
const [data, setData] = useState([]);
const [work, setWork] = useState([]);
const [text, setText] = useState('');
const [text2, setText2] = useState('');
useEffect( () => {
  setData(route.params?.data);
  setWork(route.params?.data2);
  setItem(route.params?.data3);
 },[route.params]);
console.log(route.params?.data3);
  const updateData = (item) => {
    fetch('https://6544afd55a0b4b04436cbf81.mockapi.io/ttt/API_Screen_1/'+data, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: data,
      work: [...work,text]
    })
  })
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


      <Pressable style={{ marginTop:150,width:200, height:40, backgroundColor:'#00BDD6', alignItems:'center', justifyContent:'center', borderRadius:10 }} onPress={() => (updateData(), navigation.navigate('Screen_02',{item}))}>
        <Text style={{fontSize:16, color:'#fff'}}>FINISH</Text>
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
