import styled from 'styled-components';

import background from '../../assets/images/noc-wallpaper.jpg';
// import backgroundGif from '../../assets/gif/vayne.gif';

export const ContainerHome = styled.div`
  background-repeat: no-repeat;
  background-image: url(${background});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  background-position: top;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 0;
`;

export const LogOutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 0 70px;

  button {
    padding: 10px;
    font-family: Domine, sans-serif;
    border: 1px solid #c8a96b;
    background: transparent;
    color: #c8a96b;
    font-size: 14px;
    width: 300px;
    display: block;
    margin-top: 14px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
