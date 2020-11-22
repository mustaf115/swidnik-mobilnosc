import * as React from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Picker as _Picker } from '@react-native-community/picker';
import styled from 'styled-components/native';
import Container from '../comps/Container';
import TopRow from '../comps/TopRow';
import Button from '../comps/Button';

const Content = styled.SafeAreaView`
width: 60%;
`;

const PickerWrapper = styled.View`
margin-bottom: 40px;
border-style: solid;
border-bottom-width: 1px;
border-bottom-color: #ddd;
`;

const Picker = styled(_Picker)`
width: 100%;
`;

const Description = styled.TextInput`
margin-bottom: 40px;
border-style: solid;
border-bottom-width: 1px;
border-bottom-color: #ddd;
`;

const Images = styled.View`
margin-bottom: 40px;
`;

const ImagePicker = styled.TouchableOpacity`
width: 100px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
border-width: 1px;
border-style: solid;
border-color: #aaa;
`;

const ReportScreen = ({ navigation: { toggleDrawer } }) => {
  const [reason, setReason] = React.useState();
  const [description, setDescription] = React.useState('');

  const insets = useSafeAreaInsets();

  const handleMockup = () => alert('Do zaimplementowania');

  return (
    <Container insets={insets}>
      <TopRow toggleDrawer={toggleDrawer} />
      <Content>
        <PickerWrapper>
          <Picker
            selectedValue={reason}
            onValueChange={(value) => {
              setReason(value);
            }}
          >
            <Picker.Item label="--- Wybierz powód ---" value="0" />
            <Picker.Item label="Usterka" value="1" />
            <Picker.Item label="Wandalizm" value="2" />
          </Picker>
        </PickerWrapper>
        <Description
          multiline
          numberOfLines={7}
          textAlignVertical="top"
          value={description}
          onChange={(e) => setDescription(e.nativeEvent.text)}
          placeholder="Opisz zgłoszenie..."
        />
        <Images>
          <ImagePicker onPress={handleMockup}>
            <Text style={{ color: '#aaa' }}>Dodaj zdjęcie</Text>
          </ImagePicker>
        </Images>
        <Button onPress={handleMockup}>Zgłoś zdarzenie</Button>
      </Content>
    </Container>
  );
};

export default ReportScreen;
