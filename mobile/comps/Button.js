import * as React from 'react';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
margin: 10px 0;
padding: 10px 0;
width: 250px;
align-items: center;
background: #cc0000;
`;

const Text = styled.Text`
color: white;
`;

const Button = ({ onPress, children }) => (
  <StyledButton onPress={onPress}>
    <Text>{children}</Text>
  </StyledButton>
);

export default Button;
