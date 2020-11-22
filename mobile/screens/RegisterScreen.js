import * as React from 'react';
import { Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Container from '../comps/Container';
import LoginField from '../comps/FormField';
import Button from '../comps/Button';

const RegisterScreen = ({ navigation }) => {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const insets = useSafeAreaInsets();

  return (
    <Container insets={insets} just>
      <Image
        style={{ marginBottom: 20 }}
        source={require('../assets/swidnik.png')}
      />
      <LoginField placeholder="Login" value={login} onChange={(e) => setLogin(e.nativeEvent.text)} />
      <LoginField placeholder="Hasło" secureTextEntry value={password} onChange={(e) => setPassword(e.nativeEvent.text)} />
      <Button onPress={() => navigation.replace('Login')}>Zarejestruj</Button>
    </Container>
  );
};

export default RegisterScreen;
