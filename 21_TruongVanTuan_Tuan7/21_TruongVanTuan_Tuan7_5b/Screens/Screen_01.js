
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import "@fontsource/vt323";



export default function Screen_01({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{
                fontFamily: 'VT323',
                fontSize: 26,
                textAlign: 'center',
                marginTop: 40
                // width:'100%'
            }} >A premium online store for <br /> sporter and their stylish choice</Text>

            <View style={{
                width: 359,
                height: 388,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F7E5E4',
                borderRadius: 50,
                marginTop: 30
            }}>
                <Image style={{
                    width: 300,
                    height: 300,
                    resizeMode: 'contain'
                }} source={
                    require('../assets/1.png')
                } />
            </View>
            <Text style={{
                textAlign: 'center',
                fontSize: 23,
                fontWeight: 'bold',
                marginTop: 10
            }}>
                POWER BIKE<br /> SHOP
            </Text>

            <Pressable
                onPress={() => navigation.navigate('Screen_02') }
                style={{
                    width: 359,
                    height: 50,
                    backgroundColor: 'red',
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10
                }}>
                <Text style={{ fontFamily: 'VT323', fontSize: 27, color: 'white' }}>Get Started</Text>
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
