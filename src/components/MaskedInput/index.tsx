import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';

import { useField } from '@unform/core';
import { Props, InputState } from 'react-input-mask';
import { Container, Input } from './styles';

interface InputProps extends Props{
  name: string;
}

const MaskedInput:React.FC<InputProps> = ({ name, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const {
    fieldName,
    registerField,
    defaultValue,
    clearError,
    error,
  } = useField(name);

  const inputElementRef = useRef<any>(null);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputElementRef.current,
      path: 'value',
      setValue(ref: any, value) {
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

    setIsFilled(!!inputElementRef.current?.value);
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
