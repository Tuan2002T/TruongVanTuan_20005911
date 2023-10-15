import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-paper';
import { IoStarSharp } from 'react-icons/io5';
import { BsQuestionCircle, BsChevronRight } from 'react-icons/bs';


function HomeScreen({ navigation, route }) {

  const [img, setImage] = useState(require('./assets/vs_blue.png'));
  const [color1, setColor1] = useState('Blue');
  const [pice1, setPice1] = useState('1.790.000 đ');

  useEffect(() => {
    if (route.params?.imagee != null) {
      setImage(route.params?.imagee)
      setColor1(route.params?.color)
      setPice1(route.params?.pice)
    }
  });
console.log(pice1);
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    }}>
      <Image style={{
        width: 300,
        height: 360,
        resizeMode: 'contain',
      }}
        source={
          img
        }
      />

      <Text style={{
        width: '100%',
        fontSize: 15,
        marginLeft: 70
      }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

      <View style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
      }}>
        <View style={{
          flexDirection: 'row',
          marginLeft: 30,
        }}>
          <IoStarSharp color='#E0E41A' style={{ paddingRight: 2 }} size={25} />
          <IoStarSharp color='#E0E41A' style={{ paddingRight: 2 }} size={25} />
          <IoStarSharp color='#E0E41A' style={{ paddingRight: 2 }} size={25} />
          <IoStarSharp color='#E0E41A' style={{ paddingRight: 2 }} size={25} />
          <IoStarSharp color='#E0E41A' style={{ paddingRight: 2 }} size={25} />
        </View>
        <Text style={{ paddingLeft: 30 }}>(Xem 828 đánh giá)</Text>
      </View>

      <View style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 70,
        paddingTop: 10,
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginRight: 50,
        }}>
          {pice1}
        </Text>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          textDecorationLine: 'line-through',
          color: 'gray',

        }}>
          1.790.000 đ
        </Text>
      </View>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginLeft: 70,
        paddingTop: 10,
        paddingBottom: 20,
      }}>
        <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: 'red',
          marginRight: 5,
        }}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <BsQuestionCircle size={20} />
      </View>
      <Button
        onPress={() => navigation.navigate('Profile', { img, pice1, color1 })}
        labelStyle={{
          width: '100%',
          color: '#000',
          marginLeft: 90,
        }} style={{
          borderRadius: 10,
          width: 330,
          height: 40,
        }} mode="outlined" >
        <Text>4 MÀU-CHỌN MÀU {route.params?.post} </Text>
        <BsChevronRight style={{
          marginLeft: 70,
        }} />
      </Button>

      <Button
        textColor='white'
        labelStyle={{
          width: '100%',
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
        }} style={{
          borderRadius: 10,
          width: 330,
          height: 40,
          backgroundColor: 'red',
          marginTop: 30,
        }} mode="contained" >
        CHỌN MUA
      </Button>
    </View>
  );
}
function Screen_2({ navigation, route }) {

  const [imagee, setImage] = useState();
  const [color, setColor] = useState();
  const [pice, setPice] = useState();

  useEffect(() => {
    if (route.params?.img !== imagee) {
      setImage(route.params?.img)
      setColor(route.params?.color1)
      setPice(route.params?.pice1)
    }
  }, []);
  console.log(imagee);
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#cfcfcf',
      alignItems: 'center',
    }}>
      <View style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingBottom: 10,
      }}>
        <Image
          style={{
            width: 112,
            height: 132,
            margin: 5,
            resizeMode: 'contain',
          }}
          source={
            imagee
          } />

        <View style={{
          width: '70%',
          padding: 20,
        }}>
          <Text style={{
            fontSize: 15,

            marginRight: 60,
            fontWeight: '500',
          }}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          <Text style={{ marginTop: 5 }}>Màu: <b>{color}</b></Text>

          <Text style={{ marginTop: 5 }}>Cung cấp bởi <b>Tiki Tradding</b></Text>
          <Text style={{ fontWeight: 'bold', marginTop: 5 }}>{pice}</Text>
        </View>
      </View>
      <View style={{
        width: '100%',
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: '450',
          padding: 10,
        }}>Chọn một màu bên dưới:</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setImage(require('./assets/vs_silver.png'))
            setColor('Silver')
            setPice('1.490.000 đ')
          }}
          style={{
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            marginBottom: 11
          }}>
          <View style={{
            width: 80,
            height: 80,
            backgroundColor: '#C5F1FB',
          }}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          setImage(require('./assets/vs_red.png'))
          setColor('Red')
          setPice('1.590.000 đ')
        }} style={{
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          marginBottom: 11
        }}>
          <View style={{
            width: 80,
            height: 80,
            backgroundColor: '#F30D0D',
          }}></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setImage(require('./assets/vs_black.png'))
            setColor('Black')
            setPice('1.690.000 đ')
          }}
          style={{
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            marginBottom: 11
          }}>
          <View style={{
            width: 80,
            height: 80,
            backgroundColor: '#000',
          }}></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setImage(require('./assets/vs_blue.png'))
            setColor('Blue')
            setPice('1.790.000 đ')
          }
          }
          style={{
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            marginBottom: 11
          }}>
          <View style={{
            width: 80,
            height: 80,
            backgroundColor: '#234896',
          }}></View>
        </TouchableOpacity>
      </View>
      <Button
        onPress={() => navigation.navigate('Home', { imagee,pice,color })}
        buttonColor='#4D6DC1' labelStyle={{
          fontWeight: 'bold',
          fontSize: 18
        }} style={{
          width: 326,
          height: 44,
          marginTop: 10,
          border: '1px solid #000',
          borderRadius: 8,
        }} mode="contained">
        XONG{route.params?.post}
      </Button>
    </View>
  );
}
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen options={{ headerShown: false, }} name="Profile" component={Screen_2} /> */}
      <Stack.Screen options={{ headerShown: false, }} name="Home" component={HomeScreen} />
      <Stack.Screen options={{ headerShown: false, }} name="Profile" component={Screen_2} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}