import styled, {css} from 'styled-components';
import IconScore1 from '../../assets/images/icon-score.png';
import IconScore2 from '../../assets/images/icon-score2.png';
import IconGreenArrow from '../../assets/images/icon-green-arrow.png';
import IconRedArrow from '../../assets/images/icon-red-arrow.png';

type StatusMatch = {
  status: 'victory' | 'defeat';
};

type StatusWinRate = {
  status: 'good' | 'bad';
};

export const WrapperHistory = styled.div`
  max-width: 1065px;
  width: 100%;
  display: flex;
  margin: 15px 0 0 40px;
  padding-top: 60px;
`;

export const ContainerListHistory = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 705px;
  width: 100%;
  max-height: 460px;
  height: 100%;
  overflow: auto;
  padding: 30px;
`;

export const ItemListHistory = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 15px;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.21);
  padding: 15px 0 15px 15px;
  max-width: 635px;
  width: 100%;
  &:hover {
    transition: 0.5s ease-in-out;
    background-color: hsla(0, 0%, 100%, 0.2);
    transform: scale(1.02);
  }
  .champ-match {
    width: 60px;
    height: 63px;
    position: relative;
    img {
      border-radius: 50px;
      border: 2px solid ${({theme}) => theme.colors.goldColor};
      width: 60px;
      height: 60px;
    }
    .level-champ-match {
      color: #fff;
      background-color: #161616;
      position: absolute;
      border-radius: 50%;
      border: 1px solid ${({theme}) => theme.colors.goldColor};
      font-size: 14px;
      padding: 5px 7px 4px 6px;
      bottom: 0;
      right: -2px;
    }
  }

  .infos-match {
    display: flex;
    flex-direction: column;
    gap: 6px;
    .type-match {
      color: rgba(255, 255, 255, 0.61);
      font-size: 13px;
      letter-spacing: 0.5px;
      font-weight: 600;
    }
    .spells-match {
      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  .wrapper-items {
    padding-left: 15px;
    .items-match {
      img {
        width: 38px;
        height: 38px;
        border: 1px solid rgba(158, 133, 32, 45%);
      }
    }
    .infos-score-match {
      display: flex;
      justify-content: space-between;
      padding-top: 5px;
      span {
        color: rgba(255, 255, 255, 0.61);
        font-size: 14px;
        letter-spacing: 0.6px;
        font-weight: 600;
        position: relative;
      }
      span:nth-child(2):before {
        content: '';
        background-image: url(${IconScore1});
        position: absolute;
        width: 14px;
        height: 16px;
        bottom: -2px;
        left: -18px;
      }
      span:nth-child(3):before {
        content: '';
        background-image: url(${IconScore2});
        position: absolute;
        width: 20px;
        height: 15px;
        bottom: -2px;
        left: -23px;
      }
    }
  }
`;

export const StatusMatch = styled.li<StatusMatch>`
  color: ${({theme}) => theme.colors.babyBlueColor};
  ${props =>
    props.status === 'defeat' &&
    css`
      color: ${({theme}) => theme.colors.errorMenssage};
    `}
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const ContainerRecentlyChampsHistory = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 22px;
  max-height: 460px;
  height: 100%;
  overflow: auto;

  .title-recently {
    color: #f0e6d2;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
  }
  .recently-champs {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 30px;
    margin-top: 30px;

    .champ {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .icon-champ {
        width: 80px;
        border: 1px solid ${({theme}) => theme.colors.goldColor};
      }
      .banner-mastery {
        width: 78px;
      }
      .icon-mastery {
        width: 60px;
        position: absolute;
        top: 85px;
      }
      .percent-mastery {
        font-size: 19px;
        color: #aa9261;
        margin-top: 22px;
      }
      .win-rate {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 18px;
        span {
          color: #f0e6d2;
          font-size: 16px;
          display: block;
        }
      }
    }
  }

  .separator {
    height: 1px;
    width: 220px;
    background-color: rgba(255, 255, 255, 0.21);
    margin: 60px 0;
  }
`;

export const StatusWinRate = styled.span<StatusWinRate>`
  font-size: 19px !important;
  &:after {
    content: '';
    position: absolute;
    background-image: url(${IconGreenArrow});
    background-repeat: no-repeat;
    width: 18px;
    height: 10px;
    background-size: 18px;
    right: 6px;
    bottom: 7px;
    ${props =>
      props.status === 'bad' &&
      css`
        background-image: url(${IconRedArrow});
      `}
  }
`;
