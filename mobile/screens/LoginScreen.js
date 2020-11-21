import * as React from 'react';
import styled from 'styled-components/native';
import * as SecureStore from 'expo-secure-store'
import Button from '../comps/Button';
import Separator from '../comps/Separator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import Container from '../comps/Container';
import FormField from '../comps/FormField';

const Register = styled.Text`
color: #1592e1;
`


export default function LoginScreen({navigation}) {
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('');

  const insets = useSafeAreaInsets();

  const handleLogin = async () => {
    try {
      // fetch session here
      if(await SecureStore.isAvailableAsync()) await SecureStore.setItemAsync('name', login);
      console.log('Logged in!');
      navigation.replace('App')
    } catch (error) {
      alert(error.message)
    }
  }
  
  return (
    <Container insets={insets} just>
      <Image
        style={{marginBottom: 20}}
        source={ require('../assets/swidnik.png') }
      />
      <FormField placeholder="Login" value={login} onChange={(e) => setLogin(e.nativeEvent.text)} />
      <FormField placeholder="Hasło" secureTextEntry value={password} onChange={(e) => setPassword(e.nativeEvent.text)} />
      <Button onPress={handleLogin}>Zaloguj</Button>
      <Separator />
      <Button onPress={handleLogin}>Facebook</Button>
      <Button onPress={handleLogin}>Google</Button>
      <Register onPress={() => navigation.push('Register')}>lub utwórz nowe konto</Register>

    </Container>
  );
}