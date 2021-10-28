import styled, {css} from 'styled-components';

type ContainerProps = {
  isActive?: boolean;
};

export const Container = styled.li<ContainerProps>`
  button {
    background: transparent;
    border: 0;
    color: #beb088;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 15px;
    cursor: pointer;

    ${({isActive}) =>
      isActive &&
      css`
        color: #fff;
      `}
    &:hover {
      transition-duration: 0.2s;
      color: #fff;
    }
  }
`;
