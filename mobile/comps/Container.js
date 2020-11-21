import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
padding-top: ${({insets}) => insets.top + 20}px;
${ ({just}) => just ? 'height: 100%' : '' }
display: flex;
align-items: center;
${ ({just}) => just ? 'justify-content: center;' : '' }
`;

export default Container