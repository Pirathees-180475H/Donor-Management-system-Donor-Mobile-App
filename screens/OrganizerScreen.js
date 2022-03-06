import { StyleSheet, Text, View,Button } from 'react-native';

export default OrganizerScreen=({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Donor Get After Organizer </Text>
         <Button title='go to Donation History' onPress={()=>navigation.navigate("DonationHistory")}></Button>
      </View>
    );
  }