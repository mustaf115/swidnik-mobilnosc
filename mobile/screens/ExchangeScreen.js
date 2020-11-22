import * as React from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Container from '../comps/Container';
import TopRow from '../comps/TopRow';
import Button from '../comps/Button';

const PrizesScroll = styled.ScrollView`
margin: 20px 0;
width: 90%;
height: 75%;
border-width: 1px;
border-style: solid;
border-color: #1592e1;
border-radius: 10px;
`;

const Prizes = styled.View`
width: 100%;
display: flex;
justify-content: space-around;
flex-direction: row;
flex-wrap: wrap;
`;

const Prize = styled.View`
margin: 10px;
width: 150px;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
background-color: #ddd;
border-width: 1px;
border-style: solid;
border-color: #999;
border-radius: 5px;
`;

const ExchangeScreen = ({ navigation: { toggleDrawer } }) => {
  const insets = useSafeAreaInsets();

  return (
    <Container insets={insets}>
      <TopRow toggleDrawer={toggleDrawer} />
      <PrizesScroll>
        <Prizes>
          {[...new Array(10)].map((el, i) => <Prize key={i}><Text>{i}</Text></Prize>)}
        </Prizes>
      </PrizesScroll>
      <Button>Wybierz nagrodę</Button>
    </Container>
  );
};

export default ExchangeScreen;
