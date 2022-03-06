import { StyleSheet, Text, View,Button } from 'react-native';

export default MessagesScreen=({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Donor Home Screen Contain Notifications</Text>
         <Button title='go to Donation History ' onPress={()=>navigation.navigate("DonationHistory")}></Button>
      </View>
    );
  }