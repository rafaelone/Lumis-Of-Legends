import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactElement,
  ComponentType,
} from 'react';
import {IconBaseProps} from 'react-icons';
import {FiAlertCircle} from 'react-icons/fi';
import {useField} from '@unform/core';

import {Container, Error} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;

  // eslint-disable-next-line react/require-default-props
  icon?: ComponentType<IconBaseProps>;
}

export function Input({
  name,

  icon: Icon,
  ...rest
}: InputProps): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsfilled] = useState(false);
  const {fieldName, defaultValue, error, registerField} = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsfilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container
      isErrored={!!error}
      isFocused={isFocused}
      isFilled={isFilled}
      data-testid="input-container">
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        {...rest}
        ref={inputRef}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
}
