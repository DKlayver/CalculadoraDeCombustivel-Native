import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import { useState } from 'react';
import Logo from './assets/bomba-de-combustivel.png';

export default function App() {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const gasPreco = parseFloat(gasolina.trim())
    const alcPreco = parseFloat(alcool.trim())
    
    if(!gasPreco || !alcPreco){
      setResultado('Insira os valores nos campos')
      return
    }
    
    const soma = (alcPreco/gasPreco)

    if(soma < 0.7){
      setResultado('Álcool é a melhor opção')
    }else{
      setResultado('Gasolina é a melhor opção')
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={Logo}
      />
      <Text style={styles.titulo}>Qual a melhor escolha?</Text>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <TextInput 
          style={styles.inputs}
          keyboardType='decimal-pad'
          placeholder='Gasolina'
          value={gasolina}
          onChangeText={(gas) => setGasolina(gas)}
        ></TextInput>
        <TextInput 
          style={styles.inputs} 
          keyboardType='decimal-pad' 
          placeholder='Álcool'
          value={alcool}
          onChangeText={(alc) => setAlcool(alc)}
        ></TextInput>

        <TouchableHighlight 
          style={styles.button}
          activeOpacity={0.5}
          onPress={calcular}
          ><Text>Calcular</Text>
        </TouchableHighlight>
        
      </View>
      <Text>{resultado}</Text>
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
  image: {
    width: 150,
    height: 150,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  main: {
    gap: 10
  },
  inputs:{  
    borderColor:'black',
    paddingHorizontal: 50,
    borderRadius: 30,
    borderWidth: 1,
    textAlign:'center',
  },
  button:{
    backgroundColor: '#ffcc00',
    padding:6,
    borderWidth: 1,
    borderRadius: 5,
    alignItems:'center',
    marginTop:10,
    marginBottom:5,
  }
});
