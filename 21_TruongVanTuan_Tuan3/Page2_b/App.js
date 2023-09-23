import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{
        width: 90,
        height: 90,
        marginTop: 50,
        marginBottom: 40,
      }} source={
        require('./assets/eye.png')
      } />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid #d9d9d9',
        padding: 10,
        marginBottom: 20,
      }}>
        <Image style={{
          width: 30,
          height: 30,
        }} source={
          require('./assets/user.png')
        } />

        <input style={{
          width: 280,
          height: 30,
          border: 'none',
          marginLeft: 10,
          fontSize: 16,
        }} type="text" placeholder="Please input username" />
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid #d9d9d9',
        padding: 10,
      }}>
        <Image style={{
          width: 30,
          height: 30,
        }} source={
          require('./assets/lock.png')
        } />

        <input style={{
          width: 280,
          height: 30,
          border: 'none',
          marginLeft: 10,
          fontSize: 16,
        }} type="text" placeholder="Please input password" />
      </div>

      <input style={{
        width: 340,
        height: 45,
        backgroundColor: '#1890ff',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        marginTop: 50,
        fontSize: 16,
      }} type='submit' value='LOGIN' />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 340,
        marginTop: 20,
        marginBottom: 25,
      }}>
        <Text style={{
          marginTop: 20,
          fontSize: 16,
        }}>Register?</Text>
        <Text style={{
          marginTop: 20,
          fontSize: 16,
        }}>Forgot password?</Text>
      </div>
      <div>
        <Text style={{
          textDecorationLine: 'line-through',
        }}>                      </Text>
        <Text style={{
          fontSize: 16,
          fontWeight: '500'
        }}> Other Login Methods </Text>
        <Text style={{
          textDecorationLine: 'line-through',
        }}></Text>
        <Text style={{
          textDecorationLine: 'line-through',
        }}>                      </Text>
      </div>


      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 340,
        marginTop: 50,
        marginBottom: 25,
      }}>
        <Image
          style={{
            width: 70,
            height: 70,
          }}
          source={
            require('./assets/+user.png')
          } />
        <Image
          style={{
            width: 70,
            height: 70,
          }}
          source={
            require('./assets/wifi.png')
          } />
        <Image
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#3A579C',
            borderRadius: 7,
          }}
          source={
            require('./assets/FB.png')
          } />
      </div>
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
