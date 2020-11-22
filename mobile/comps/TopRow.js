import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Logo from './Logo';

const Row = styled.SafeAreaView`
padding: 0 20px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
`;

const TopRow = ({ toggleDrawer }) => (
  <Row>
    <Logo />
    <TouchableOpacity onPress={toggleDrawer}><Text>Menu</Text></TouchableOpacity>
  </Row>
);

export default TopRow;
