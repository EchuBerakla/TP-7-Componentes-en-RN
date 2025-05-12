import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, ImageBackground ,SafeAreaView,StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  const img= require('./assets/fondo.png')
  const imgPerfil=require('./assets/imgPerfil.jpg')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground      
      source={img}
      resizeMode='cover'
      style={styles.backgroundImg}>
        <View style={styles.tarjeta}>
        <Image style={styles.img}
      source={imgPerfil}>
      </Image>
      <Text style={styles.estiloTexto}>
        Ezequiel Berakla
        Diseñador UI/UX
      </Text>
      <TextInput placeholder='Ingresa un comentario' style={styles.TextInput}>
      </TextInput>
      <TouchableOpacity style={styles.Boton}>
        <Text>Contactar</Text>
      </TouchableOpacity>
      </View>
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
      width: 90,   
      height: 90,     
      left: 115,   
      borderRdius: 25, 
      marginBottom:15,
  },
  estiloTexto:{
    marginHorizontal: 80,
    fontSize: 20,
    marginBottom:20,
   },
   tarjeta:{
    padding:20,
    backgroundColor: 'white',
    marginHorizontal: 20,
    width: 350,
    height:300,
    borderRadius:50
   },
   TextInput:{
    marginHorizontal:50,
    marginBottom: 30,
    borderWidth:2,
    borderColor:'grey',
    fontSize:10,
    width:200,
    height:30,
   },
   Boton:{
    height:25,
    width:70,
    marginBottom:20,
    borderWidth:2,
    borderColor:'grey',
    marginHorizontal:120,
    borderRadius:5,
   }
});
