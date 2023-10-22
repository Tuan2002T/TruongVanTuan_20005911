import { FlatList, StyleSheet, TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';
import { AiOutlineArrowLeft, AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';
import { HiOutlineArrowUturnLeft } from 'react-icons/hi2';
import { BsCartCheck } from 'react-icons/bs';

const arr = [
  {
    img: require('./assets/1.png'),
    name: 'Ca nấu lẫu, mấu mì mini',
    shop: 'Devang'
  },
  {
    img: require('./assets/2.png'),
    name: '1KG khô gà bơ tỏi',
    shop: 'LTD Food'
  },
  {
    img: require('./assets/3.png'),
    name: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi'
  },
  {
    img: require('./assets/4.png'),
    name: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi'
  },
  {
    img: require('./assets/5.png'),
    name: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book'
  },
  {
    img: require('./assets/6.png'),
    name: 'Hiếu lòng con trẻ',
    shop: 'Minh Long Book'
  },
  {
    img: require('./assets/1.png'),
    name: 'Ca nấu lẫu, mấu mì mini',
    shop: 'Devang'
  },
  {
    img: require('./assets/2.png'),
    name: '1KG khô gà bơ tỏi',
    shop: 'LTD Food'
  },
  {
    img: require('./assets/3.png'),
    name: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi'
  },
  {
    img: require('./assets/4.png'),
    name: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi'
  },
  {
    img: require('./assets/5.png'),
    name: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book'
  },
  {
    img: require('./assets/6.png'),
    name: 'Hiếu lòng con trẻ',
    shop: 'Minh Long Book'
  },
  {
    img: require('./assets/1.png'),
    name: 'Ca nấu lẫu, mấu mì mini',
    shop: 'Devang'
  },
  {
    img: require('./assets/2.png'),
    name: '1KG khô gà bơ tỏi',
    shop: 'LTD Food'
  },
  {
    img: require('./assets/3.png'),
    name: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi'
  },
  {
    img: require('./assets/4.png'),
    name: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi'
  },
  {
    img: require('./assets/5.png'),
    name: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book'
  },
  {
    img: require('./assets/6.png'),
    name: 'Hiếu lòng con trẻ',
    shop: 'Minh Long Book'
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
          marginLeft: 20
        }} color='white' size={30} />
        <Text style={{
          color: '#fff',
          fontSize: 20
        }} >Chat</Text>
        <BsCartCheck style={{
          marginRight: 20
        }} color='white' size={30} />
      </View>


      <Text style={{
        padding: 15,
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: 15,
        backgroundColor: '#cfcfcf'
      }}>Bạn có thắc măc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
      <ScrollView style={{
        width: '100%',
        height: 300
      }}>

        <FlatList data={arr}
          renderItem={({ item }) => {
            return (
              <View style={{
                width: '100%',
                height: 100,
                flexDirection: 'row',
                padding: 5,
                justifyContent: 'space-between',
                // border: '1px solid #000',
              
              }}>
                <Image style={{
                  width: 100,
                  height: 100,
                  resizeMode:'contain'
                }} source={item.img} />
                <View style={{
                  margin: 10
                }}>
                  <Text style={{
                    marginBottom:10
                  }}>{item.name}</Text>
                  <Text>Shop: {item.shop}</Text>
                </View>
                <TouchableOpacity  style={{
                  padding: 10,
                  width: 88,
                  height:38,
                  backgroundColor: 'red',
                  marginTop: 20,
                  alignItems:'center'
                }
                }><Text style={{
                  color:'#fff',
                  fontWeight: 'bold',
                  
                }}>Chat</Text></TouchableOpacity>
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
    // justifyContent: 'center',
  },
});
