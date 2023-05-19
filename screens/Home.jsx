import React, {useState} from 'react';
import styled from 'styled-components/native';
import {
    Text,
    View,
    TextInput,
    Button,
    Alert,
} from 'react-native';

const InputForm = styled.View`
  padding: 10px;
`;
const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  font-size: 20px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  height: 40px;
`;

export const HomeScreen = ({ navigation }) => {

    const [inputText, setInputText] = useState('');

    const handleInputChange = (text) => {
        setInputText(text);
    };
    const buttonPressHandler = () => {
        if (inputText.trim() !== '')
            Alert.alert('Info', inputText);
        else
            Alert.alert('Error', 'Empty string');
    };
    return (
       <InputForm>
           <Label>Ip address:</Label>
           <Input
               onChangeText={handleInputChange}
               value={inputText}
           />
           <Button title="Ok"
                   onPress={buttonPressHandler}
           />
       </InputForm>
    );
};
