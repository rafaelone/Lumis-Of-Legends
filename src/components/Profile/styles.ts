import styled from 'styled-components';
import Banner from '../../assets/images/banner-profile.png';

export const WrapperProfile = styled.div`
  max-width: 1065px;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
`;

export const ContainerNameBanner = styled.div`
  height: 100%;
  width: 225px;
  position: absolute;
  left: 60px;

  .banner {
    background: url(${Banner}) no-repeat;
    background-size: cover;
    position: relative;
    height: 100%;
    .border-ranked {
      position: relative;
      top: 30%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      span {
        color: #f0e6d2;
        font-size: 1.7rem;
        font-weight: 700;
        letter-spacing: 0.5px;
      }
      .tier {
        position: absolute;
        z-index: 10;
        bottom: 40px;
        font-size: 14px;
        padding-left: 3px;
      }
      img {
        &:nth-child(2) {
          z-index: 1;
        }
        &:nth-child(3) {
          width: 90px;
          position: absolute;
          bottom: 58px;
          border-radius: 50px;
          z-index: 0;
        }
      }
    }
  }
`;

export const ContainerProfileInfos = styled.div`
  max-width: 790px;
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 5%;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 0 32px 32px 32px;
      height: 230px;
      position: relative;
      &.mastery-score {
        span:nth-child(2) {
          font-size: 25px;
          letter-spacing: 0.5px;
          margin-top: 8px;
        }
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }

      .icon-champ {
        width: 68px;
        border: 1px solid ${({theme}) => theme.colors.goldColor};
        border-radius: 50px;
        z-index: 1;
        position: absolute;
        bottom: 45px;
      }
      .banner-mastery {
        width: 55px;
        position: absolute;
        bottom: 30px;
        z-index: 0;
      }
      .icon-mastery {
        width: 40px;
        position: absolute;
        bottom: 15px;
      }

      span {
        text-transform: uppercase;
        font-weight: bold;
        &:nth-child(1) {
          color: #beb088;
          font-size: 11.5px;
          margin-bottom: 5px;
        }
        &:nth-child(2) {
          font-size: 10.5px;
          color: #f0e6d2;
        }
      }
      .icon-ranked {
        width: 105px;
        padding-top: 60px;
      }
      .icon-honor,
      .icon-trophy,
      .icon-banner {
        width: 65px;
        padding-top: 60px;
      }
      &:hover {
        cursor: pointer;
        background: linear-gradient(
          0deg,
          rgba(235, 235, 244, 0.1348914566),
          hsla(0, 0%, 100%, 0) 70%
        );

        transition-duration: 0.2s;
      }
    }
  }
`;
