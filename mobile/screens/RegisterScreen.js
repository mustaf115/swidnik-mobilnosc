import * as React from 'react';
import styled from 'styled-components/native';
import * as SecureStore from 'expo-secure-store'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import Container from '../comps/Container';
import Logo from '../comps/Logo';
import TopRow from '../comps/TopRow';
import LoginField from '../comps/FormField';
import Button from '../comps/Button';


const RegisterScreen = ({navigation}) => {
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('');
  
  const insets = useSafeAreaInsets();

  return (
    <Container insets={insets} just>
      <Image
        style={{marginBottom: 20}}
        source={ require('../assets/swidnik.png') }
      />
      <LoginField placeholder="Login" value={login} onChange={(e) => setLogin(e.nativeEvent.text)} />
      <LoginField placeholder="Hasło" secureTextEntry value={password} onChange={(e) => setPassword(e.nativeEvent.text)} />
      <Button onPress={() => navigation.replace('Login')}>Zarejestruj</Button>
    </Container>
  );
}

export default RegisterScreen;