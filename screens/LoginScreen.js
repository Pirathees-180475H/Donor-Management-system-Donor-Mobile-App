import { StyleSheet, Text, View,Button } from 'react-native';

export default LoginScreen=({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>login Screen</Text>
         <Button title='go Home After Success' onPress={()=>navigation.navigate("Contents")}></Button>
      </View>
    );
  }