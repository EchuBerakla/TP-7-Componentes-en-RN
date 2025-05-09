import { StatusBar } from 'expo-status-bar';
import { ImageBackground ,SafeAreaView,StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const img= require('./assets/fondo.jpg')
  const imgPerfil=require('./assets/imgPerfil.jpg')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground      
      source={img}
      resizeMode='cover'
      style={styles.backgroundImg}>
          <Image style={styles.img}
      source={imgPerfil}>
      </Image>
      </ImageBackground>
    
    </SafeAreaView>
    


  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  backgroundImg: {
    flex:1,
    justifyContent: 'center',
  },
  img:{
      width: 50,   
      height: 50,
      bottom: 350,     
      left: 330,   
      borderRadius: 25, 
  },
});
