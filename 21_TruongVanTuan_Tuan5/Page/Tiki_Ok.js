import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { HiMinusSm } from 'react-icons/hi';
import { MdRectangle } from 'react-icons/md';
import { BsPlus } from 'react-icons/bs';
import { Button, TextInput } from 'react-native-paper';

export default function Tiki_Ok() {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                width: 380,
            }}>

                <Image
                    style={{
                        width: 104,
                        height: 127,
                        margin: 10,
                        marginTop: 10,
                    }}
                    source={
                        require('../assets/Tiki_Ok/book.png')
                    }
                />
                <View style={{
                    marginTop: 10,
                    marginLeft: 10,
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                    }}>Nguyên hàm tích phân và ứng dụng<br /><br />Cung cấp bởi Tiki Trading </Text>
                    <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold', paddingTop: 5 }}>141.800đ</Text>
                    <Text style={{ fontSize: 12, textDecorationLine: 'line-through', paddingBottom: 5, fontWeight: 'bold', color: '#808080' }}>141.800đ</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <HiMinusSm style={{ backgroundColor: '#C4C4C4' }} color='#808080' />
                            
                            
                            <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: 'bold' }}>1</Text>
                            <BsPlus style={{ backgroundColor: '#C4C4C4' }} color='#000' />

                        </View>
                        <Text style={{ fontSize: 12, color: '#134FEC', fontWeight: 'bold' }}>Mua sau</Text>
                    </View>
                    <View style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        marginLeft: -120
                    }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginRight: 10 }}>Mã giảm giá đã lưu</Text>
                        <Text style={{ fontSize: 12, color: '#134FEC', fontWeight: 'bold' }}>Xem tại đây</Text>
                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 360,
                paddingTop: 40,
            }}>
                <TextInput
                    label="Mã giảm giá"
                    style={{
                        backgroundColor: '#FFF',
                        border: '1px solid #C4C4C4',
                        width: 208,
                        height: 45,
                    }}
                    secureTextEntry
                    left={<TextInput.Icon color='#F2DD1B' icon="rectangle" />}
                />

                <Button labelStyle={{ fontSize: 14, fontWeight: 'bold' }} theme={{ colors: { primary: '#fff' } }} style={{ width: 120, height: 45, justifyContent: 'center', borderRadius: 3, backgroundColor: '#0A5EB7' }} mode="elevated" >
                    Áp dụng
                </Button>
            </View>

            <View style={{ width: '100%', height: 15, backgroundColor: '#C4C4C4', marginTop: 25 }}>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-start !important',
                padding: 10,

            }}>
                <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginRight: 10,
                }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#134FEC',
                }}>Nhập tại đây?</Text>
            </View>
            <View style={{ width: '100%', height: 15, backgroundColor: '#C4C4C4' }}>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                padding: 10,
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                }}>
                    Tạm tính
                </Text>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#EE0D0D',
                    marginRight: 10,
                    paddingBottom: 10
                }}>
                    141.800đ
                </Text>
            </View>
            <View style={{ width: '100%', height: 100, backgroundColor: '#C4C4C4' }}>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                padding: 10,
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#808080',
                }}>
                    Thành tiền
                </Text>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#EE0D0D',
                    marginRight: 10,
                }}>
                    141.800đ
                </Text>
            </View>

            <Button labelStyle={{ fontSize: 20, fontWeight: 'bold' }} theme={{ colors: { primary: '#fff' } }} style={{ width: 370, height: 45, justifyContent: 'center', marginTop: 20, marginBottom: 10, borderRadius: 3, backgroundColor: '#E53935' }} mode="elevated" >
                TIẾN HÀNH ĐẶT HÀNG
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
