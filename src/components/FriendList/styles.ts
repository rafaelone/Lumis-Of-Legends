import styled from 'styled-components';

export const Container = styled.aside`
  width: 240px;
  background-color: rgba(1, 10, 19, 0.7333333333333333);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;

  @media screen and (max-width: 1450px) {
    width: 240px;
  }
`;

export const Social = styled.div`
  text-transform: uppercase;
  color: #e4dbc8;
  padding: 0.6rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  transition-duration: 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 14px;
  }

  div {
    img {
      padding-left: 12.8px;
      transition-duration: 0.2s;
      cursor: pointer;
      width: 30px;
      &:hover {
        filter: brightness(150%);
        transition-duration: 0.2s;
      }
    }
  }
`;
export const Footer = styled.footer`
  position: absolute;
  width: 99%;
  border: 1px solid #1e282d;
  height: 43px;
  bottom: 33px;

  img {
    width: 20px;
    padding: 0.8rem;
    background-color: #1e2328;
    transition-duration: 0.2s;
    border: 1px solid #c8a96b;
    cursor: pointer;
  }
`;
