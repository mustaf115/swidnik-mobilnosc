import * as React from 'react';
import { Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as SecureStore from 'expo-secure-store';
import styled from 'styled-components/native';
import Button from '../comps/Button';
import Separator from '../comps/Separator';
import Container from '../comps/Container';
import FormField from '../comps/FormField';

const Register = styled.Text`
color: #1592e1;
`;

const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const insets = useSafeAreaInsets();

  const handleLogin = async () => {
    try {
      // fetch session here
      if (await SecureStore.isAvailableAsync()) await SecureStore.setItemAsync('name', login);
      navigation.replace('App');
    } catch (error) {
      alert('Błąd w logowaniu');
    }
  };

  return (
    <Container insets={insets} just>
      <Image
        style={{ marginBottom: 20 }}
        source={require('../assets/swidnik.png')}
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
};

export default LoginScreen;
