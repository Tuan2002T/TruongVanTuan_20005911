import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';

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

      <View style={styles.inputUS}>
        <Image style={{
          width: 30,
          height: 30,
        }} source={
          require('./assets/user.png')
        } />

        <TextInput style={{
          width: 280,
          height: 30,
          // border: '#fff',
          marginLeft: 10,
          fontSize: 16,
        }} type="text" placeholder="Please input username" />
      </View>

      <View style={styles.inputPass}>
        <Image style={{
          width: 30,
          height: 30,
        }} source={
          require('./assets/lock.png')
        } />

        <TextInput style={{
          width: 280,
          height: 30,
          border: 'none',
          marginLeft: 10,
          fontSize: 16,
        }} type="text" placeholder="Please input password" />
      </View>
      <TouchableHighlight>
        <View style={styles.btnLogin}>
          <Text style={styles.Text}>LOGIN</Text>
        </View>
      </TouchableHighlight>
      <View style={{
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
      </View>
      <View style={{
        flexDirection: 'row',
      }}>
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
      </View>


      <View style={{
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
  inputUS: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#d9d9d9',
    padding: 10,
    marginBottom: 20,
  },
  inputPass: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#d9d9d9',
    padding: 10,
  },
  btnLogin:{
    width: 340,
        height: 45,
        backgroundColor: '#1890ff',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        marginTop: 50,
        fontSize: 16,
        justifyContent: 'center',
  },
  Text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  }
});
