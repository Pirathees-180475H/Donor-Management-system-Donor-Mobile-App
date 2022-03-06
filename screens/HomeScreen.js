import { StyleSheet, Text, View,Button } from 'react-native';

export default HomeScreen=({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>First Page of Donor Show Map of Camp</Text>
         <Button title='go to Donation History' onPress={()=>navigation.navigate("DonationHistory")}></Button>
      </View>
    );
  }