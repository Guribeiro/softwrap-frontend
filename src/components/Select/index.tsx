import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  SelectHTMLAttributes,

} from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  name, label, options, ...rest
}) => {
  const SelectRef = useRef<HTMLSelectElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const {
    fieldName, registerField, defaultValue = '', clearError, error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: SelectRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  const handleSelectFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleSelectBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!SelectRef.current?.value);
  }, []);
  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <select
        id={name}
        ref={SelectRef}
        defaultValue={defaultValue}
        {...rest}
        onFocus={handleSelectFocus}
        onBlur={handleSelectBlur}
      >
        <option value={defaultValue} disabled hidden>
          Marital Status
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
