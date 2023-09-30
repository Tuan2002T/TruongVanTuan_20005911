import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default function Page1_a() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 100, height: 100 }}
        source={
          require('../assets/Page1_a/Ellipse.png')
        }
      />
      <Text style={styles.text1}>
        GROW <br></br> YOUR BUSINESS
      </Text>

      <Text style={styles.text2}>
        We will help you to grow your business using online server
      </Text>
      <View style={
        {
          display: 'flex',
          flexDirection: 'row',
        }
      }>
        <TouchableHighlight>
          <View style={styles.btn}>
            <Text style={styles.textbtn}>LOGIN</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.btn}>
            <Text style={styles.textbtn}>SIGN UP</Text>
          </View>
        </TouchableHighlight>
      </View>
      <Text style={styles.text3}>HOW WE WORK?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 70
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    marginTop: 50,
    textAlign: 'center'
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
    marginTop: 50,
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 50
  },
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
  },
  text3: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  textbtn: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
  }
});



