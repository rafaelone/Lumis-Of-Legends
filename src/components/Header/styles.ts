import styled from 'styled-components';

export const HeaderContainer = styled.header`
  z-index: 4;
  position: fixed;
  height: 75px;
  width: calc(100vw - 240px);
  top: 0;
  background-color: initial;
  nav {
    background-color: rgba(1, 10, 19, 0.7333333333333333);
    height: 75px;
    border-bottom: 1px solid #65656f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      height: 75px;
      display: flex !important;
      justify-content: flex-start;
      list-style: none;
    }
  }
`;
