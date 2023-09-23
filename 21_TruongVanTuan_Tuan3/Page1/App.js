import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={{width: 100, height: 100}}
        source={
          require('./assets/Ellipse.png')
        }
      />
      <Text style={{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
        marginTop: 50,
        textAlign: 'center'
      }}>
        GROW <br></br> YOUR BUSINESS
      </Text>

      <Text style={{
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000',
        marginTop: 50,
        textAlign: 'center',
        paddingHorizontal: 30,
        marginBottom: 50
      }}>
        We will help you to grow your business using online server
    </Text>
          <div style={
          {
            display: 'flex',
            flexDirection: 'row',
          }
        }>
          <input style={styles1.btn} type='button' value='LOGIN'/>
          <input style={styles1.btn} type='button' value='SIGN UP'/>
        </div>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBF5FE',
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection:'column',
    paddingTop: 100
  },
});

const styles1 = StyleSheet.create({
  btn: {
    backgroundColor: '#E3C000',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    width: 100,
    height: 40,
    textAlign: 'center',
    border: 'none',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
    margin: 40
  }
});

