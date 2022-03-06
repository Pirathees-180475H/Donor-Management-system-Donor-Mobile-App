import { StyleSheet, Text, View,Button } from 'react-native';

export default SettingScreen=({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Place where Update and Change Details and Request Organizng</Text>
         <Button title='go to Donation History' onPress={()=>navigation.navigate("DonationHistory")}></Button>
      </View>
    );
  }