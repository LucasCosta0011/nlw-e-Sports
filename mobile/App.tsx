import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// extends ButtonHTMLAttributes<HTMLButtonElement>
interface ButtonProps{
  titulo: string;
}

function Teste(){
  return(
    <div>
      <img src="./assets/teste.png" alt="" />
    </div>
  )
}

function Button(props: ButtonProps){
  return(
    
    <>
      <TouchableOpacity>
        <Text>
          {props.titulo}
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button titulo="Teste 1" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
