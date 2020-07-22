/**
 * @desc form전송
 * @reference https://react-hook-form.com/get-started#TypeScript
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableWithoutFeedback, Keyboard, Alert, Dimensions } from 'react-native';
import { useForm } from 'react-hook-form';
import { TextInput, View, Text } from 'react-native';
import Toast from 'react-native-tiny-toast';
import { FORM_DATA_INFO } from '@app/constpack';

type Props = {};
type Fields = 'name' | 'email' | 'phone' | 'password';

const ScrollWrap = styled.KeyboardAvoidingView`
  flex: 1;
`;
const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 40px;
  padding: 0 32px;
`;
const TwoContentWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const StyledTextInput = styled.TextInput`
  width: 100%;
  padding: 10px 0;
  border: 1px solid #cccccc;
`;
const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  padding: 20px 0;
  background-color: #111;
  color: #ffffff;
`;
const SubmitText = styled.Text`
  color: #ffffff;
  text-align: center;
`;

export default function UseForm({  }: Props) {
  const [inputFields, setInputFields] = useState({ email: '', password: '' });
  const { email, password } = inputFields;
  // 유효성체크
  const { NAME, EMAIL, PHONE, PASSWORD } = FORM_DATA_INFO;
  //useForm
  const { register, setValue, handleSubmit, errors, getValues } = useForm<FormData>({
    defaultValues: {
      email: 'test@domain.com',
    },
  });

  const onSubmit = params => {
    console.log(params);
    Toast.show(JSON.stringify(params, null, 1));
  };

  useEffect(() => {
    register(
      { name: 'phone' },
      { required: true, pattern: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/ },
    );
    register({ name: 'email' });
    register({ name: 'password' });
  }, [register]);

  return (
    // 키보드로 인해 가려지는 부분까지 자동 스크롤됨, 키보드 바꺝영역 터치시 자동 사라짐
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollWrap>
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <InputContainer>
              <TwoContentWrap>
                <StyledTextInput
                  onChangeText={(text: string) => {
                    setValue('phone', text);
                  }}
                  placeholder="PHONE"
                  maxLength={10}
                />
              </TwoContentWrap>
            </InputContainer>
            <InputContainer>
              <TwoContentWrap>
                <StyledTextInput
                  onChangeText={(text: string) => {
                    setValue('email', text);
                  }}
                  placeholder="E-MAIL"
                  maxLength={20}
                />
              </TwoContentWrap>
            </InputContainer>
            <InputContainer>
              <TwoContentWrap>
                <StyledTextInput
                  onChangeText={(text: string) => {
                    setValue('password', text);
                  }}
                  placeholder="Password"
                  maxLength={20}
                />
              </TwoContentWrap>
            </InputContainer>
            <SubmitButton onPress={handleSubmit(onSubmit)}>
              <SubmitText>SUBMIT</SubmitText>
            </SubmitButton>
            <SubmitButton
              onPress={() => {
                Toast.show(JSON.stringify(getValues(), null, 1));
                //  console.log(getValues());
              }}>
              <SubmitText>TEST</SubmitText>
            </SubmitButton>
          </Container>
        </KeyboardAwareScrollView>
      </ScrollWrap>
    </TouchableWithoutFeedback>
  );
}
