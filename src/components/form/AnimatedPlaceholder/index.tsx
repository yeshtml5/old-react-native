import React, { useState, useRef } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  duration?: number;
  marginTop?: number;
  marginLeft?: number;
  placeholder?: string;
  text?: string;
  value?: string;
  // Animated 요소로 변화구간을 지정해줌 css Keyframes의 %와 비슷한 역할을 함
  toValue?: number;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  size?: string;
  // 3분 countdown state
  Timer?: string;
  // 숫자만 입력해야하는 input의 경우 number 키패드
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    | undefined;
  maxLength?: number;
  disabled?: boolean;
};
const StyledInputView = styled.View`
  flex: 1;
`;
const StyledTextInput = styled.TextInput`
  width: ${(props: { size?: string }) => (props.size ? props.size : '100%')};
  height: 40px;
  border-width: 1px;
  border-bottom-color: #eaeaea;
  border-bottom-width: 1px;
  border: none;
  font-size: 14px;
  font-weight: bold;
`;
const AnimatedStyle = styled(Animated.Text)`
  color: #8d8d8d;
`;
const StyledTimerText = styled.Text`
  font-size: 14px;
  position: absolute;
  right: 0;
  color: #f55e5e;
`;
const AnimatedPlaceholder = ({
  marginTop,
  marginLeft,
  placeholder,
  value,
  secureTextEntry,
  autoCapitalize,
  onChangeText,
  size,
  Timer,
  text,
  keyboardType,
  maxLength,
  disabled,
}: Props) => {
  const placeholderAnimating = useRef(new Animated.Value(0)).current;
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
    Animated.timing(placeholderAnimating, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    setFocus(false);
    if (value !== undefined) {
      if (value.length <= 0) {
        Animated.timing(placeholderAnimating, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start();
      }
    }
  };

  return (
    <StyledInputView>
      <Animated.View
        pointerEvents="none"
        style={{
          position: 'absolute',
          zIndex: 2,
          top: placeholderAnimating.interpolate({
            inputRange: [0, 1],
            outputRange: [(marginTop ? marginTop : -30) + 40, -15],
          }),
          left: placeholderAnimating.interpolate({
            inputRange: [0, 1],
            outputRange: [(marginLeft ? marginLeft : 0) + 0, marginLeft ? marginLeft : 0],
          }),
        }}>
        <AnimatedStyle
          style={{
            fontSize: placeholderAnimating.interpolate({
              inputRange: [0, 1],
              outputRange: [13, 10],
            }),
          }}>
          {placeholder}
        </AnimatedStyle>
      </Animated.View>
      <StyledTextInput
        autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        onBlur={onBlur}
        onSubmitEditing={onBlur}
        onChangeText={(text: string) => onChangeText(text)}
        value={value}
        keyboardType={keyboardType}
        returnKeyType="done"
        size={size}
        maxLength={maxLength}
        editable={disabled}
      />
      {/* Timer가 있는 input에서만 보여줌 */}
      <StyledTimerText>{Timer}</StyledTimerText>
    </StyledInputView>
  );
};

export default AnimatedPlaceholder;
