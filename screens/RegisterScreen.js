import { StyleSheet, Text, View,Button } from 'react-native';

export default RegisterScreen=({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Registration Screen</Text>
         <Button title='go to Login ' onPress={()=>navigation.navigate("LoginScreen")}></Button>
      </View>
    );
  }