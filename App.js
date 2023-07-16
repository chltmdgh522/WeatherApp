import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={{flex:2, backgroundColor: "tomato" }}></View>
      <View style={{flex:1, backgroundColor: "teal" }}></View>
      <View style={{flex:1, backgroundColor: "blue"}}></View>
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:28,
    color:"red",
  }
});
