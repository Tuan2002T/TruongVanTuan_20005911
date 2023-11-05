
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList } from 'react-native';

export default function Screen_02({ navigation, route }) {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  useEffect(() => {
    setData(route.params?.item.id);
    setData2(route.params?.item.work);
    setData3(route.params?.item);
  }, [route.params?.item])
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 20
      }} >
        <Pressable onPress={() => navigation.goBack()}><Image style={{ width: 50, height: 50, marginLeft: 10 }} source={require('../assets/left.png')} /></Pressable>
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <Image
            style={{
              width: 45,
              height: 45,
              resizeMode: 'contain',
              borderRadius: 50,
              backgroundColor: '#D9CBF6',
              marginRight: 5
            }}
            source={
              require('../assets/Rectangle.png')
            } />
          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', textAlign: 'center' }}>Hi {data.name}</Text>
            <Text style={{ fontSize: 12, fontWeight: '700', textAlign: 'center', color: '#CFCFCF' }}>Have agrate day a head</Text>
          </View>
        </View>
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
        }} source={require('../assets/search.png')} />
        <TextInput placeholder='Search' placeholderTextColor={'#cfcfcf'} style={{
          width: '90%',
          height: 40,
          border: '1px solid #9095A0',
          borderRadius: 5,
          paddingLeft: 40,
        }} />
      </View>


      {data2.map(item => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', height: 40, backgroundColor: '#cfcfcf', borderRadius: 10, marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', marginLeft: 10 }} >
            <Image style={{ width: 20, height: 20 }} source={require('../assets/1.png')} />
            <Text>{item}</Text>
          </View>
          <Image style={{ width: 20, height: 20, marginRight: 10 }} source={require('../assets/2.png')} />
        </View>
      ))}

      <Pressable onPress={()=> navigation.navigate('Screen_03',{data, data2,data3})}>
        <Image style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: 100, marginTop: 30 }} source={require('../assets/cong.png')} />
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
