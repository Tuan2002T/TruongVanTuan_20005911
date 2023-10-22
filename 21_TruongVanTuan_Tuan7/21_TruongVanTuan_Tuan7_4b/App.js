import { FlatList, StyleSheet, TouchableOpacity, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { AiOutlineArrowLeft, AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsCartCheck } from 'react-icons/bs';
import { TfiMoreAlt } from 'react-icons/tfi';
import { HiOutlineArrowUturnLeft } from 'react-icons/hi2';
import { Rate } from 'antd';
const arr = [
  {
    img: require('./assets/1.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS1...',
    price: '69.900 đ',
    Rate: 1
  },
  {
    img: require('./assets/2.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    Rate: 2
  },
  {
    img: require('./assets/3.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS3...',
    price: '69.900 đ',
    Rate: 1.5
  },
  {
    img: require('./assets/4.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS4...',
    price: '69.900 đ',
    Rate: 2
  },
  {
    img: require('./assets/5.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS5...',
    price: '69.900 đ',
    Rate: 2.5
  },
  {
    img: require('./assets/6.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS6...',
    price: '69.900 đ',
    Rate: 3
  },
  {
    img: require('./assets/1.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS1...',
    price: '69.900 đ',
    Rate: 3.5
  },
  {
    img: require('./assets/2.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    Rate: 4
  },
  {
    img: require('./assets/3.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS3...',
    price: '69.900 đ',
    Rate: 4.5
  },
  {
    img: require('./assets/4.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS4...',
    price: '69.900 đ',
    Rate: 5
  },
  {
    img: require('./assets/5.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS5...',
    price: '69.900 đ',
    Rate: 3
  },
  {
    img: require('./assets/6.png'),
    name: 'Cáp chuyển từ Cổng USB sang PS6...',
    price: '69.900 đ',
    Rate: 2
  }

]
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1BA9FF',
        width: '100%',
        justifyContent: 'space-between',
        height: 42
      }}>
        <AiOutlineArrowLeft style={{
          marginLeft: 20,
        }} color='white' size={30} />
        <View style={{
          justifyContent: 'center'
        }}>
          <BiSearch size={25} style={{ position: 'absolute', paddingLeft: 5 }} />
          <TextInput placeholder='Dây cáp usb' placeholderTextColor={'#cfcfcf'} style={{ backgroundColor: '#fff', width: 190, height: 30, paddingLeft: 30 }}></TextInput>
        </View>
        <BsCartCheck style={{
          marginRight: 20
        }} color='white' size={30} />
        <TfiMoreAlt style={{ paddingRight: 20 }} color='white' size={25} />
      </View>
      <ScrollView style={{
        width: '100%',
        height:550
      }}>
        <FlatList
          numColumns={2}
          data={arr}
          renderItem={({ item }) => {
            return (
              <View style={{
                width: '50%',
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
              }}>
                <Image style={{ width: 130, height: 90, margin: 10, resizeMode: 'contain' }} source={item.img} />
                <Text >{item.name}</Text>
                <View style={{flexDirection:'row'}}>
                  <Rate style={{
                    marginLeft: -5
                  }} allowHalf defaultValue={item.Rate} />
                  <Text>(15)</Text>
                </View>
                <View style={{
                  width: '100%',
                  flexDirection: 'row'
                }}>
                  <Text style={{
                    textAlign: 'left',
                    width: '100%',
                    fontWeight: 'bold'
                  }}>{item.price}</Text>
                  <Text>-39%</Text>
                </View>
              </View>
            )
          }}
        />
      </ScrollView>
      <View style={{
        width: '100%',
        height: 50,
        backgroundColor: '#1BA9FF',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <AiOutlineMenu style={{padding:10}} color='#000' size={30} />
        <AiOutlineHome style={{padding:10}} color='#000' size={30}/>
        <HiOutlineArrowUturnLeft style={{padding:10}} color='#000' size={30} />
      </View>
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
