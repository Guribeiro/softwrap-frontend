import React, {
  InputHTMLAttributes,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';

import { useField } from '@unform/core';

import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const {
    fieldName, registerField, defaultValue, clearError, error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={18} />}
      <input
        onFocus={handleInputFocus}
        defaultValue={defaultValue}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
