import styled from 'styled-components';

import background from '../../assets/images/noc-wallpaper.jpg';
// import backgroundGif from '../../assets/gif/vayne.gif';

export const ContainerProfile = styled.div`
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
