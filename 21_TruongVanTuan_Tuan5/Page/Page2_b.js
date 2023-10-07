import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { MdStarRate } from 'react-icons/md';
import { BiSolidCamera } from 'react-icons/bi';
import { Button } from 'react-native-paper';

export default function Page2_b() {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 50,
            }}>
                <Image style={{ width: 70, height: 70, margin: 15 }} source={require('../assets/Page2_b/usb.png')} />
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginRight: 5
                }}>
                    USB Bluetooth Music Receiver<br />HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>

            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Cực kỳ hài lòng</Text>
            <View style={{
                flexDirection: 'row'
            }}>
                <MdStarRate style={{ margin: 5 }} color='#F2DD1B' size={45} />
                <MdStarRate style={{ margin: 5 }} color='#F2DD1B' size={45} />
                <MdStarRate style={{ margin: 5 }} color='#F2DD1B' size={45} />
                <MdStarRate style={{ margin: 5 }} color='#F2DD1B' size={45} />
                <MdStarRate style={{ margin: 5 }} color='#F2DD1B' size={45} />
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 5,
                border: '1px solid #1511EB',
                borderRadius: 5,
                width: 300,
                marginTop: 20,
            }}>
                <BiSolidCamera style={{ margin: 10 }} size={50} />
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginRight: 5,

                }}>Thêm hình ảnh</Text>

            </View>

            <TextInput
                // placeholder="Viết đánh giá của bạn..."
                paddingHorizontal={10}
                paddingVertical={5}
                style={{
                    border: '1px solid #C4C4C4',
                    width: 300,
                    height: 200,
                    marginTop: 20,
                    borderRadius: 5,
                }}
            />
            <Button labelStyle={{fontSize:20, fontWeight: 'bold'}} theme={{ colors: { primary: '#fff' } }}  style={{width:300, marginTop: 20, borderRadius:3, backgroundColor: '#0D5DB6'}} mode="elevated" >
                Gửi
            </Button>

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
