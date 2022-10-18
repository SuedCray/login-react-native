import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {


  const cadastro= () => {
    alert('Parabéns, Você está cadastrado :)')
  }



  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,}}>Seu App de Finanças</Text>
      <StatusBar style="hidden" />

      <Image style={{width:150,height:100}} source={require('./assets/reactimg.jpg')}/>

      <TextInput placeholder="  Seu Email" style={styles.textInput}/>
      <TextInput secureTextEntry={true} placeholder="  Sua Senha" style={styles.textInput}/>
      

    <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
      <Text>Login</Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 20,
  },

  TouchableOpacity:{
    backgrounColor: 'white',
  },


  btnCadastro: {
    width: '80%',
    height: 40,
    backgrounColor:'#4e0671',
  },

  Text:{
    fontSize: '15px',
  }

});
