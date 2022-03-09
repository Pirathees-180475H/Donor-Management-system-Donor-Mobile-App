import { StyleSheet, Text,Animated, View,Button,Dimensions,Image,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';


export default LandingScreen=({navigation})=> {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
                    resizeMode="stretch"
                    style={styles.logo}
                    source={require("../assets/logo.png")}/>
        </View>

            <Animatable.View style={styles.footer} animation="wobble">
                <Text style={styles.title}>Welcome To Donor HUB</Text>
                <Text style={styles.text}>Lets JOIN</Text>

                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                    <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Get Started</Text>
                            
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
      </View>
    );
  }


  const {height} = Dimensions.get("screen");
  const height_logo = height * 0.25;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#eccc68'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#f1f2f6',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo-31,
        height: height_logo
    },
    title: {
        color: '#2f3542',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });