import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';

import { useField } from '@unform/core';
import { Props } from 'react-input-mask';
import { Container, Input } from './styles';

interface InputProps extends Props{
  name: string;
}

interface InputValueReference {
  value: string;
}

const MaskedInput:React.FC<InputProps> = ({ name, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const {
    fieldName,
    registerField,
    defaultValue = '',
    clearError,
    error,
  } = useField(name);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const inputElementRef = useRef<any>(null);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        // inputValueRef.current.value = value;
        // inputElementRef.current.setNativeProps({
        //   text: value,
        // });
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [registerField, fieldName]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current?.value);
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <Input
        ref={inputElementRef}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default MaskedInput;
