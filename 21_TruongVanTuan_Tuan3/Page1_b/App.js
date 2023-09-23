import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width:90, height:100}} source={
        require('./assets/lock.png')
      }/>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
        margin: 20,
        padding: 24,
        textAlign: 'center'
      }}>FORGET <br/> PASSWORD</Text>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000',
        marginBottom: 20,
        textAlign: 'center',
        padding: 20
      }}>
        Provide your account's email for which you want to reset your password. 
      </Text>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: 350,
        height: 42,
        backgroundColor: '#C4C4C4',
      }}>
          <Image style={{width:39, height:39}} source={
          require('./assets/mail.png')
          }/>
          <input type='text' placeholder='Email'  style={{
            width: 350,
            height: 40,
            border: 'none',
            backgroundColor: '#C4C4C4',
          }}/>
      </div>
      <input type='submit' value='NEXT' style={{
        width: 350,
        height: 40,
        fontSize: 17,
        fontWeight: 'bold',
        border: 'none',
        backgroundColor: '#E3C000',
        color: '#000',
        marginTop: 40
      }}/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100,
    // justifyContent: 'center',
  },
});
