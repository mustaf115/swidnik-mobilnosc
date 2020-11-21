import * as React from 'react';
import styled from 'styled-components/native';
import * as SecureStore from 'expo-secure-store'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import Container from '../comps/Container';
import Logo from '../comps/Logo';
import TopRow from '../comps/TopRow';


const Main = styled.SafeAreaView`
padding: 20px;
width: 100%;
`

const Title = styled.Text`
font-size: 42px;
`

const NewsCard = styled.SafeAreaView`
margin: 10px 0;
padding: 10px 20px;
width: 100%;
height: 120px;
border-width: 1px;
border-style: solid;
border-color: #1592e1;
border-top-left-radius: 20px;
border-bottom-right-radius: 20px;
`

const NewsTitle = styled.Text`
font-size: 24px;
font-weight: bold;
`

const Points = styled.SafeAreaView`
margin-top: 10px;
margin-left: 10px;
width: 60%;
`

const PointsTitle = styled.Text`
width: 100%;
font-size: 24px;
`

const PointsCount = styled.Text`
width: 100%;
font-size: 24px;
font-weight: bold;
border-style: solid;
border-bottom-width: 1px;
border-bottom-color: red;
`

export default function HomeScreen({navigation: {toggleDrawer}}) {
  const [greet, setGreet] = React.useState('')

  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    (async () => {
      const storedName = await SecureStore.getItemAsync('name')
      let greet;

      if(storedName) greet = 'Witaj ponownie, ' + storedName + '!'
      else greet = 'Witaj ponownie!'
      setGreet(greet);
    })()
  }, [])
  
  return (
    <Container insets={insets}>
      <TopRow toggleDrawer={toggleDrawer} />
      <Main>
        <Title>{greet}</Title>

        {[... new Array(3)].map((el, i) => 
          <NewsCard key={i}>
            <NewsTitle>Lorem</NewsTitle>
            <Text>Lorem ipsum dolor sit amet</Text>
          </NewsCard>)}
        
        <Points>
          <PointsTitle>Twoje Punkty</PointsTitle>
          <PointsCount>30</PointsCount>
        </Points>
      </Main>
    </Container>
  );
}