import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <h1 style={
        {
          fontWeight: 'bold',
          fontSize: 55,
          color: '#000',
          margin: 20,
          paddingTop: 100,
        }
      }>CODE</h1>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
        paddingTop: 30,
      }}>VERIFICATION</Text>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
        paddingTop: 40,
        textAlign: 'center',
      }}>Enter ontime password sent on <br/> ++849092605798</Text>
      <div>
        <input style={styles1.otp} type="text"/>
        <input style={styles1.otp} type="text"/>
        <input style={styles1.otp} type="text"/>
        <input style={styles1.otp} type="text"/>
        <input style={styles1.otp} type="text"/>
        <input style={styles1.otp} type="text"/>
      </div>
      <input type='submit' value='VERIFY CODE' style={{
        backgroundColor: '#E3C000',
        color: '#fff',
        width: 350,
        height: 50,
        border: 'none',
        marginTop: 50,
      }} />
      {/* <StatusBar style="auto" /> */}
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

const styles1 = StyleSheet.create({
  otp: {
    width: 50,
    height: 50,
    border: '1px solid #000',
    textAlign: 'center',
    marginTop: 40,
  },
});
