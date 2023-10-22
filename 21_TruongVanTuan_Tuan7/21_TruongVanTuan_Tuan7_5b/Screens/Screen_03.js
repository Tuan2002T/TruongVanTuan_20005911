import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import "@fontsource/ubuntu";
import "@fontsource/voltaire";
import {BsHeart } from 'react-icons/bs';

export default function Screen_03({navigation, route}) {

console.log(route.params?.item);
  return (
    <View style={styles.container}>
      <View style={{
        width:'95%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FDECEC',
        borderRadius:10,
        margin:10
      }}>
        <Image style={{
          width: 300,
          height: 340,
          resizeMode: 'contain'
        }} source={
          route.params.item.img
        } />
      </View>
      <Text style={{
        width:'100%',
        fontFamily: 'Voltaire',
        fontSize: 35,
        fontWeight: '400',
        textAlign:'left',
        marginTop: 5,
        marginLeft: 15
      }}>
      {route.params.item.name}
      </Text>
      <View style={{
        width:'100%',
        flexDirection:'row'
      }}>
        <Text style={{
          fontFamily: 'Voltaire',
          fontSize: 25,
          fontWeight: '400',
          textAlign:'left',
          marginTop: 5,
          marginLeft: 10,
          color:'#66625E'
        }}>15% OFF {route.params.item.pice}$</Text>
        <Text style={{
          fontFamily: 'Voltaire',
          fontSize: 25,
          fontWeight: '400',
          textAlign:'left',
          marginTop: 5,
          marginLeft: 30,
          textDecorationLine:'line-through'
        }}>449${route.params?.post}</Text>
      </View>
      <View style={{
          width:'100%',
          marginLeft: 20
      }}>
      <Text style={{
          fontFamily: 'Voltaire',
          fontSize: 25,
          fontWeight: '400',
          marginTop: 5,
      }}>Description</Text>
      <Text style={{
          fontFamily: 'Voltaire',
          fontSize: 20,
          fontWeight: '400',
          marginTop: 15,
          color:'#66625E',
      }}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
      </View>
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:20,
        width:'100%'
      }}>
          <BsHeart style={{marginTop:15}} size={30}/>
          <Pressable
          onPress={()=> navigation.navigate('Screen_02')}
          style={{
                  width: 270,
                  height: 54,
                  backgroundColor: '#E94141',
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10
            
          }}>
              <Text style={{
                  fontFamily: 'Voltaire',
                  fontSize: 20,
                  fontWeight: '400',
                  color:'#fff',
              }}>Add to cart</Text>
          </Pressable>
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
