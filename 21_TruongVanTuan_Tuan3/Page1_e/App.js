import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 40,
      }}>REGISTER</Text>
      <input style={styles1.formRegister} placeholder='Name' type='text'/>
      <input style={styles1.formRegister} placeholder='Phone' type='text'/>
      <input style={styles1.formRegister} placeholder='Email' type='text'/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', 
        width: 340,
        height: 30,
       margin: 10,
       padding: 10,
       backgroundColor: '#C9E0D0',
      }}>
            <input style={{
              width: 290,
              height: 30,
              fontSize: 20,
              backgroundColor: '#C9E0D0',
              border: 'none',
            }} placeholder='Password' type='text'/>
            <Image style={{
              width: 30,
              height: 30,
            }} source={
              require('./assets/eye.png')
              }/>
      </div>
      <input style={styles1.formRegister} placeholder='Birtday' type='text'/>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
      }}>
            <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -170,
                }}>
                <input name='check' checked style={{
                width: 25,
                height: 25,
                }} type='radio'/> 
                <label style={{
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 10,
                }}>Male</label>
            </div>
            <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <input name='check' style={{
                width: 25,
                height: 25,
                }} type='radio'/> 
                <label style={{
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 10,
                }}>Female</label>
            </div>
      </div>
      <input style={{
        width: 360,
        height: 40,
        margin: 10,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#C34E3B',
        fontWeight: 'bold',
        color: '#fff',
        border: 'none',
      }} type='submit' value='REGISTER'/>
      <Text>When you agree to terms and conditions</Text>
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
const styles1 = StyleSheet.create({
  formRegister: {
    width: 340,
    height: 30,
    margin: 10,
    padding: 10,
    fontSize: 20,
    backgroundColor: '#C9E0D0',
    border: 'none',
  },
});