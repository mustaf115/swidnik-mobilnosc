import React from 'react';
import styled from 'styled-components/native';

const Image = styled.Image`
width: 50px;
height: 70px;
`;

const Logo = () => (
  <Image
    resizeMode="contain"
    source={require('../assets/swidnik.png')}
  />
);

export default Logo;
