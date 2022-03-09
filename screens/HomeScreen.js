import { StyleSheet, Text, View, Dimensions ,Image} from 'react-native';
import MapView,{Marker,Callout} from 'react-native-maps';
import { useState ,useEffect} from 'react';
import * as Location from 'expo-location';


export default HomeScreen=({navigation})=> {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion,setMapRegion]=useState(null);

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

    //Clean Up Function To avoid Memory Leaks
    return()=>{console.log('clean Up')}
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
       
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
    }
  });