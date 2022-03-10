import { StyleSheet, Text,Animated,Alert,StatusBar,View,Button,Dimensions,Image,TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';


export default LoginScreen=({navigation})=> {
  //Text Handler States
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [isEmailValid,setEmailValid]=useState(false);
  const[isPasswordValid,setPasswordValid]=useState(false);
  const [isPasswordVisible,setPasswordVisible]=useState(false);
  const [isAuth,setIsAuth]=useState(true);     // Check Login Or Not

  

  const changeHandler=(value,inputType)=>{
    switch(inputType){
      case "Email":{
          setEmail(value);
          if(value.length>5){setEmailValid(true)}else{setEmailValid(false)}
          break;
      }
    }
  }

  const togglePasswordVisible=()=>{
    setPasswordVisible(!isPasswordVisible);
  }

  const LoginHandler =()=>{
    if(isAuth){
      navigation.navigate("Contents");
    }else{
      Alert.alert("Invalid Attempt","Error Message From Firebase",[{text:"OK"}])
    }
  }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#c0392b' barStyle="light-content"/>
        <View style={styles.header}>
          <Text style={styles.text_header}>Log In To D:HUB</Text>
        </View>

        <Animatable.View style={styles.footer} animation="bounceIn">
          <Text style={styles.text_footer} >Login</Text>
            <View style={styles.action}>
              <MaterialCommunityIcons name="account" color="#c0392b" size={26} />
                  <TextInput
                  placeholder='Enter Your Email'
                  style={styles.textInput}
                  onChangeText={(value)=>changeHandler(value,"Email")}
                  autoCapitalize="none"
                  />
                  <Animatable.View animation="bounceIn">
                  {isEmailValid ? <MaterialCommunityIcons name="check-circle" color="#4cd137" size={26} />
                  : <MaterialCommunityIcons name="close-circle" color="#c0392b" size={26} />}
                  </Animatable.View>
            </View>
                 
            <Text style={[styles.text_footer,{marginTop:25}]} >PassWord</Text>

            <View style={[styles.action]}>
              <MaterialCommunityIcons name="lock" color="#c0392b" size={26} />
                  <TextInput
                  placeholder='Enter Your Password'
                  style={styles.textInput}
                  secureTextEntry={isPasswordVisible ? false: true}
                  onChangeText={(value)=>changeHandler(value,"Password")}
                  autoCapitalize="none"
                  />
                   <Animatable.View animation="bounceIn">
                  {isPasswordVisible ? <MaterialCommunityIcons name="eye" color="#4cd137" size={26} onPress={togglePasswordVisible} />
                : <MaterialCommunityIcons name="eye-off" color="#c0392b" size={26} onPress={togglePasswordVisible}/>}
                  </Animatable.View>
            </View>

            <View style={styles.button}>
                <TouchableOpacity
                      style={[styles.signIn,{marginTop:0}]}
                     onPress={()=>LoginHandler()}
                  >
                  <LinearGradient
                      colors={['#e67e22', '#c0392b']}
                      style={styles.signIn}
                  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]}>Log In</Text>
                  </LinearGradient>
                </TouchableOpacity>
            </View>

            
            <View style={[styles.button,{marginTop:15}]}>
                <TouchableOpacity
                      style={styles.signIn}
                      onPress={() =>navigation.navigate("RegisterScreen")}
                  >
                  <LinearGradient
                      colors={['#e74c3c', '#e67e22']}
                      style={styles.signIn}
                  >
                      <Text style={[styles.textSign, {
                          color:'#fff'
                      }]}>Register</Text>
                  </LinearGradient>
                </TouchableOpacity>
            </View>

        </Animatable.View>

      </View>
      
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#c0392b'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });