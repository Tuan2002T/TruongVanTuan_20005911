
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList, ScrollView } from 'react-native';

export default function Screen_02({ navigation, route }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(route.params?.item);
    // fetch(`https://654e4f55cbc325355742b93e.mockapi.io/ThucHanh/Screen1/${route.params?.item.id}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log("data in item", data);
    //     setData(data);
    //   });
    console.log("done to");
  }, [route.params?.item])

  const fetchdata=(id)=>{
    fetch(`https://654e4f55cbc325355742b93e.mockapi.io/ThucHanh/Screen1/${route.params?.item.id}`)
      .then(response => response.json())
      .then(data => {
        console.log("data in item", data);
        setData(data);
      });
  }

  const updateData = () => {
    fetch('https://654e4f55cbc325355742b93e.mockapi.io/ThucHanh/Screen1/' + data.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // id: data.id,
        // work: [...data.work, newJob]
        ...data
      })
    })
  }
useEffect(() => {
  updateData();
}, [data])



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
            <Text style={{ fontSize: 18, fontWeight: '700', textAlign: 'center' }}>Hi </Text>
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
      <ScrollView style={{ width: '100%', height:300 }}>
        <FlatList
          style={{ width: '100%' }}
          data={data.work}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '95%', height: 40, backgroundColor: '#cfcfcf', borderRadius: 10, marginBottom: 10, marginHorizontal: 10 }}>
              <View style={{ flexDirection: 'row', marginLeft: 10 }} >
                <Image style={{ width: 20, height: 20 }} source={require('../assets/1.png')} />
                <Text>{item.job}</Text>
              </View>

              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Pressable onPress={() => {
                  setData({...data,work :  data.work.filter(item1 => item1.id !== item.id)})
                  console.log("delete", item);
                }}><Text>Delete</Text></Pressable>
                <Image style={{ width: 20, height: 20, marginRight: 10 }} source={require('../assets/2.png')} />
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <Pressable onPress={() => {
        navigation.navigate('Screen_03', { data });
        // console.log(data);
        // console.log(route.params?.item);

      }}>
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
