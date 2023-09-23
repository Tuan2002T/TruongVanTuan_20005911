import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 30,
        margin: 50,
        paddingBottom: 10,
      }}>LOGIN</Text>
      <input type='text' placeholder='Email' style={{
        width: 330,
        height: 30,
        backgroundColor: '#C9E0D0',
        border: 'none',
        padding: 10,
        paddingLeft:20,
      }}/>

      <div  style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        paddingLeft:20,
        marginTop:40,
        backgroundColor: '#C9E0D0',
      }}>
          <input type='text' placeholder='Password' style={{
            width: 286,
            height: 30,
            backgroundColor: '#C9E0D0',
            border: 'none',
          }}/>
          <Image style={
            {
              width: 30,
              height: 30,
              marginRight: 10,
            }
          } source={
            require('./assets/eye.png')
          }/>
      </div>

      <input style={{
        width: 360,
        height: 50,
        backgroundColor: '#C34E3B',
        border: 'none',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 50,
        marginBottom: 20,
      }} type='submit' value='LOGIN'/>
      <Text style={{fontWeight:'bold',fontSize:15}}>When you agree to terms and conditions <br/></Text>
      <Text style={{fontSize:15,color: '#5D25FA'}}><br/>For got your password?</Text>
      <Text style={{fontSize:15}}><br/>Or login with</Text>
      
      
      <div style={{
        backgroundColor: '#fff',
        display: 'flex',
        height: 130,
        width: 360,
        flexDirection: 'row',
        marginTop: 50,
      }}>
            <div style={{
              width: 120,
              height: 50,
              backgroundColor: '#275A8D',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #275A8D',
            }}> 
              <Image style={
                {
                  width: 40,
                  height: 40,
                  backgroundColor: '#275A8D',
                }
              } 
                    source={
                    require('./assets/Facebook.png')
                  }/>`
            </div>
            <div style={{
              width: 120,
              height: 50,
              backgroundColor: '#1593C5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #1593C5',
            }}> 
              <Image style={
                {
                  width: 30,
                  height: 30,
                  backgroundColor: '#1593C5',
                }
              } 
                    source={
                    require('./assets/Zalo.png')
                  }/>`
            </div>
            <div style={{
              width: 120,
              height: 50,
              backgroundColor: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #3177DE',
            }}> 
              <Image style={
                {
                  width: 30,
                  height: 30,
                  backgroundColor: '#fff',
                }
              } 
                    source={
                    require('./assets/Google.png')
                  }/>`
            </div>
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

// const styles1 = StyleSheet.create({
//   mxh: {
//     width: 30,
//     height: 30,
//     padding: 25,
//     paddingLeft: 30,
//     paddingRight: 30,
//     backgroundColor: 'red',
//   },
// });
