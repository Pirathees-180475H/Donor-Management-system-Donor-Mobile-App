import { StyleSheet, Text, View, Dimensions ,TextInput,Image} from 'react-native';
import MapView,{Marker,Callout} from 'react-native-maps';
import { useState ,useEffect} from 'react';
import * as Location from 'expo-location';
import Data from "../FakeData/Camps";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default HomeScreen=({navigation})=> {
  //User Current Location Informations
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion,setMapRegion]=useState(null);

  //Camps Data
  const [allActiveCamps,setCamps]=useState(Data);
  
  //Cards Details
  const { width, height } = Dimensions.get("window");
  const CARD_HEIGHT = 220;
  const CARD_WIDTH = width * 0.8;
  const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

  //Needs Clean Ups When Calls 
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({}); //Get Current Position Of the Phone
      setLocation(location);

      setMapRegion({
        longitude:location.coords.longitude,
        latitude:location.coords.latitude,
        longitudeDelta:0.022,
        latitudeDelta:0.07
      })

    })();
    return()=>{console.log("Clean Up Needed To Avoid Memory leaks")}
  }, []);



    return (
     
      <View style={styles.container}>
        <MapView style={styles.map}  initialRegion={mapRegion} mapType="standard" zoomTapEnabled>
            <Marker coordinate={{
                longitude: location ? location.coords.longitude : 0,
                latitude: location ? location.coords.latitude : 0
              }}
              title={'Donor -Me'}               
              >
               <Image
                source={require('../assets/donor.png')}
                style={{width: 26, height: 38}}/>

                <Callout tooltip>
                  <View  style={styles.bubble}>
                    <Text style={styles.name}> Me</Text>
                    <Text><Image style={styles.image} source={{uri:"https://gidibio.com/wp-content/uploads/2021/01/Avery-Cristy.png"}} resizeMode="cover" /> </Text>
                  </View>
                  <View style={styles.arrowBorder}></View>
                  <View style={styles.arrow}></View>
                </Callout>
            </Marker>
        </MapView>
         {/* Search Box */}
         <View style={styles.searchBox}>
            <TextInput 
              placeholder="Search here"
              placeholderTextColor="#000"
              autoCapitalize="none"
              style={{flex:1,padding:0}}
            />
            <MaterialCommunityIcons name="search-web" color="#c0392b" size={26} />
        </View>
        
      </View>
    );
  }



const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    bubble:{
      flexDirection:"column",
      alignSelf:"flex-start",
      backgroundColor:"#fff",
      borderRadius:10,
      borderColor:"#ccc",
      borderWidth:0.5,
      padding:10,
      width:150
    },
    name:{
      fontSize:16,
      marginBottom:0
    },
    arrow:{
      backgroundColor:"transparent",
      borderColor:"transparent",
      borderTopColor:"#fff",
      borderWidth:16,
      alignSelf:"center",
      marginTop:-31
    },
    arrowBorder:{
      backgroundColor:"transparent",
      borderColor:"transparent",
      borderTopColor:"#007a87",
      borderWidth:16,
      alignSelf:"center",
      marginTop:-0.5
    },
    image:{
      marginTop:0,
      width:120,
      height:80
    },
    //New Styles
    searchBox: {
      position:'absolute', 
      marginTop:20, 
      flexDirection:"row",
      backgroundColor: '#fff',
      width: '90%',
      alignSelf:'center',
      borderRadius: 5,
      padding: 10,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    chipsScrollView: {
      position:'absolute', 
      top:Platform.OS === 'ios' ? 90 : 80, 
      paddingHorizontal:10
    },
    chipsIcon: {
      marginRight: 5,
    },
    chipsItem: {
      flexDirection:"row",
      backgroundColor:'#fff', 
      borderRadius:20,
      padding:8,
      paddingHorizontal:20, 
      marginHorizontal:10,
      height:35,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    scrollView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    endPadding: {
      //paddingRight: width - CARD_WIDTH,
    },
    card: {
      // padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
     // height: CARD_HEIGHT,
     // width: CARD_WIDTH,
      overflow: "hidden",
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 2,
      padding: 10,
    },
    cardtitle: {
      fontSize: 12,
      // marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
      width:50,
      height:50,
    },
    marker: {
      width: 30,
      height: 30,
    },
    button: {
      alignItems: 'center',
      marginTop: 5
    },
    signIn: {
        width: '100%',
        padding:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
    
  });