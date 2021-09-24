import React from "react"
import MapView from 'react-native-maps';
import {View , Text} from "react-native"

class App extends React.Component{
render(){
  return(
 <View style={styles.container}>
   {/* <Text>
     Hello world in senond time
   </Text> */}
   <MapView
   style={styles.map}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    />
 </View>
  )
}

}
export default App;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });