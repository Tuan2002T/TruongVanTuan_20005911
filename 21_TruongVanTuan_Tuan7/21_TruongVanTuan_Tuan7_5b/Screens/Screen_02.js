import { StyleSheet, Text, View, Pressable, ScrollView, FlatList, Image, TouchableOpacity  } from 'react-native';
import "@fontsource/ubuntu";
import "@fontsource/voltaire";
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
const arr = [
    {
        img: require('../assets/1.png'),
        name: 'Pinarello',
        pice: '$1000',
        tim: <AiOutlineHeart style={{
            position: 'absolute',
            top: 5,
            right: 140
        }} size={29} />
    },
    {
        img: require('../assets/2.png'),
        name: 'Pina Mountai',
        pice: '$1200',
        tim: <AiFillHeart style={{
            position: 'absolute',
            top: 5,
            right: 140
        }} color='#E5DDD5' size={29} />
    },
    {
        img: require('../assets/3.png'),
        name: 'Pina Bike',
        pice: '$1300',
        tim: <AiFillHeart style={{
            position: 'absolute',
            top: 5,
            right: 140
        }} color='#E5DDD5' size={29} />
    },
    {
        img: require('../assets/4.png'),
        name: 'Pinarello',
        pice: '$1400',
        tim: <AiFillHeart style={{
            position: 'absolute',
            top: 5,
            right: 140
        }} color='#E5DDD5' size={29} />
    },
    {
        img: require('../assets/5.png'),
        name: 'Pinarello',
        pice: '$1500',
        tim: <AiOutlineHeart style={{
            position: 'absolute',
            top: 5,
            right: 140
        }} size={29} />
    },
    {
        img: require('../assets/6.png'),
        name: 'Pinarello',
        pice: '$1600',
        tim: <AiOutlineHeart style={{
            position: 'absolute',
            top: 5,
            right: 140
        }} size={29} />
    },
    {
        img: require('../assets/1.png'),
        name: 'Pinarello',
        pice: '$1000',
        tim: <AiOutlineHeart style={{
            position: 'absolute',
            top: 5,
            right: 140
        }} size={29} />
    },
    {
        img: require('../assets/2.png'),
        name: 'Pina Mountai',
        pice: '$1200',
        tim: <AiFillHeart style={{
            position: 'absolute',
            top: 5,
            right: 140
        }} color='#E5DDD5' size={29} />
    },
    {
        img: require('../assets/3.png'),
        name: 'Pinarello',
        pice: '$1300',
        tim: <AiFillHeart style={{
            position: 'absolute',
            top: 5,
            right: 140
        }} color='#E5DDD5' size={29} />
    },
    {
        img: require('../assets/4.png'),
        name: 'Pina Mountai',
        pice: '$1400',
        tim: <AiFillHeart style={{
            position: 'absolute',
            top: 5,
            right: 140
        }} color='#E5DDD5' size={29} />
    },
    {
        img: require('../assets/5.png'),
        name: 'Pinarello',
        pice: '$1500',
        tim: <AiOutlineHeart style={{
            position: 'absolute',
            top: 5,
            right: 140
        }} size={29} />
    },
    {
        img: require('../assets/6.png'),
        name: 'Pina Mountai',
        pice: '$1600',
        tim: <AiOutlineHeart style={{
            position: 'absolute',
            top: 5,
            right: 140
        }} size={29} />
    },
]

export default function Screen_02({navigation, route}) {

    
    const [mang, setmang] = useState(arr)
    function filterName(name) {
        const searchTerm = name; 
        const filteredProducts = arr.filter(product => {
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
          }); 
          return filteredProducts
    }
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 25,
                fontFamily: 'Ubuntu',
                fontWeight: '700',
                color: '#E94141',
                textAlign: 'left',
                width: '100%',
                marginTop: 30,
                marginLeft: 30,
                marginBottom: 30
            }}>The world’s Best Bike</Text>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <Pressable 
                onPress={()=> setmang(filterName(''))}
                style={{
                    border: '1px solid #E94141',
                    width: 100,
                    height: 32,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5
                }}>
                    <Text style={{ fontFamily: 'voltaire', color: '#E94141', fontSize: 20 }}>All</Text>
                </Pressable>

                <Pressable 
                onPress={()=> setmang(filterName('Pinarello'))}
                style={{
                    border: '1px solid #E94141',
                    width: 100,
                    height: 32,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5
                }}>
                    <Text style={{ fontFamily: 'voltaire', color: '#E94141', fontSize: 20 }}>Roadbike</Text>
                </Pressable>

                <Pressable
                onPress={()=> setmang(filterName('Mountai'))}
                style={{
                    border: '1px solid #E94141',
                    width: 100,
                    height: 32,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5
                }}>
                    <Text style={{ fontFamily: 'voltaire', color: '#E94141', fontSize: 20 }}>Mountain</Text>
                </Pressable>
            </View>
            <ScrollView style={{
                width: '100%',
            }}>
                <FlatList
                    numColumns={2}
                    data={mang}
                    renderItem={({item}) => {
                        return (
                            <Pressable  
                            onPress={()=>navigation.navigate('Screen_03',{item})}
                            style={{
                                width: '45%',
                                height: 200,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#FEF5EC',
                                margin: 10,
                                borderRadius: 10,

                            }}>
                                {item.tim}
                                <Image style={{
                                    width: 120,
                                    height: 120,
                                    resizeMode: 'contain'
                                }} source={item.img} />
                                <Text style={{
                                    fontFamily: 'Voltaire',
                                    fontSize: 20,
                                    fontWeight: '400',
                                    color: '#66625E',
                                    marginTop: 5
                                }}>
                                    {item.name}
                                </Text>
                                <Text style={{
                                    fontFamily: 'Voltaire',
                                    fontSize: 20,
                                    fontWeight: '400',
                                }}>
                                    {item.pice}
                                </Text>
                            </Pressable>
                        )
                    }}
                />
            </ScrollView>
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
