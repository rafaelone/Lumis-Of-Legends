import styled, {css} from 'styled-components';

import {Tooltip} from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${({theme}) => theme.colors.backgroundInput};
  border-radius: 10px;
  border: 2px solid ${({theme}) => theme.colors.backgroundInput};
  height: 58px;
  padding: 10px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #000;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #000;
      border: 2px solid #000;
    `}
  input {
    flex: 1%;
    background: transparent;
    border: 0;
    color: #312f2e;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
