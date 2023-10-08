import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import React, { useState } from 'react';


export default function Page2_c() {
  const [inputValue, setInputValue] = useState('');
  const [pass, setPass] = useState('');
  function GENERATORPassword() {

    let a = Number(inputValue);
    let password = '';
    let password1 = '';
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = lowerCase.toUpperCase();
    const numbers = '0123456789';
    const symbols = '`~!@#$%^&*()-_+={}[]|\;:"<>,.?/';

    if (checked) password += lowerCase;
    if (checked1) password += upperCase;
    if (checked2) password += numbers;
    if (checked3) password += symbols;
    // Trộn ngẫu nhiên và cắt dần về độ dài cần tạo
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    password1 =  password.substr(0, a);
    setPass(password1);
    console.log(password1);
    return password1; 
  }
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const handleCheckboxPress = () => {
    // Thực hiện hành động khi Checkbox.Item được nhấp vào.
    setChecked(!checked); // Đảo ngược trạng thái của checkbox.
    // Thêm mã xử lý khác ở đây nếu cần.
  };
  const handleCheckboxPress1 = () => {
    // Thực hiện hành động khi Checkbox.Item được nhấp vào.
    setChecked1(!checked1); // Đảo ngược trạng thái của checkbox.
    // Thêm mã xử lý khác ở đây nếu cần.
  };
  const handleCheckboxPress2 = () => {
    // Thực hiện hành động khi Checkbox.Item được nhấp vào.
    setChecked2(!checked2); // Đảo ngược trạng thái của checkbox.
    // Thêm mã xử lý khác ở đây nếu cần.
  };
  const handleCheckboxPress3 = () => {
    // Thực hiện hành động khi Checkbox.Item được nhấp vào.
    setChecked3(!checked3); // Đảo ngược trạng thái của checkbox.
    // Thêm mã xử lý khác ở đây nếu cần.
  };
  return (
    <View style={styles.container}>
      <View style={{
        alignItems: 'center',
        width: 370,
        // height: 640,
        border: '1px solid #C4C4C4',
        backgroundColor: '#23235B',
        padding: 20,
        marginTop: 20,
        borderRadius: 10,
      }}>
        <Text style={{
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold',
        }}>PASSWORD<br />GENERATOR</Text>

        <TextInput
          value={pass}
          editable={false}
          style={{
            width: 330,
            height: 50,
            fontSize: 20,
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 5,
            backgroundColor: '#151537',
          }}
        />

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 30,
        }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              marginLeft: 0,
              paddingRight: 30,
            }}>Password lenght</Text>
          <TextInput value={inputValue} onChangeText={inputValue => setInputValue(inputValue)} style={{ width: 140, height: 40, borderRadius: 1 }} />
        </View>
        <View>
          <Checkbox.Item status={checked ? 'checked' : 'unchecked'}
            onPress={handleCheckboxPress} color='#fff' labelStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: -30 }} label="Include lower case letters  " />

          <Checkbox.Item status={checked1 ? 'checked' : 'unchecked'}
            onPress={handleCheckboxPress1} color='#fff' labelStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: -30 }} label="Include upcase letters" />

          <Checkbox.Item status={checked2 ? 'checked' : 'unchecked'}
            onPress={handleCheckboxPress2} color='#fff' labelStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: -30 }} label="Include number" />

          <Checkbox.Item status={checked3 ? 'checked' : 'unchecked'}
            onPress={handleCheckboxPress3} color='#fff' labelStyle={{ color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: -30 }} label="Include special symbol" />
        </View>
        <Button onPress={GENERATORPassword} labelStyle={{ fontSize: 20, fontWeight: 'bold' }} theme={{ colors: { primary: '#fff' } }} style={{ width: 300, height: 80, justifyContent: 'center', marginTop: 20, marginBottom: 10, borderRadius: 3, backgroundColor: '#0D5DB6' }} mode="elevated" >
          GENERATE PASSWORD
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8181B8',
    alignItems: 'center',
  },
});
