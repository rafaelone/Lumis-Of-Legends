import styled, {keyframes} from 'styled-components';

const FadeInLeft = keyframes`
0% {
  opacity: 0;
  transform: translateX(-20px);
}
100% {
  opacity: 1;
  transform: translateX(0);
}
`;

export const ContainerSignIn = styled.div`
  background-image: url('https://cdna.artstation.com/p/assets/images/images/001/207/466/large/suke-22.jpg?1442249023');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const Aside = styled.aside`
  background-color: rgba(255, 255, 255, 85%);
  border-right: 2px solid rgba(255, 255, 255, 85%);
  width: 400px;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${FadeInLeft} 1s forwards;

  img {
    width: 150px;
    height: 150px;
    display: block;
    margin-bottom: 32px;
  }

  > span {
    font-family: ${({theme}) => theme.fonts.Roboto};
    font-weight: ${({theme}) => theme.weight.bold};
    font-size: 24px;
    margin-bottom: 32px;
  }

  form {
    max-width: 300px;
  }

  small {
    font-family: Roboto, sans-serif;
    color: ${({theme}) => theme.colors.errorMenssage};
    margin-bottom: 8rem;
    font-size: 14px;
    width: 300px;
    display: block;
    margin-top: 14px;
    text-align: center;
  }
`;

export const ButtonLogin = styled.button`
  width: 80px;
  height: 80px;
  border: 2px solid #f2f2f2;
  border-radius: 16px;
  background: ${({theme}) => theme.colors.loginButton};
  transition-duration: 0.2s;
  margin-top: 20px;
`;
