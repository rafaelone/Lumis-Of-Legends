import styled from 'styled-components';

export const GameType = styled.li`
  font-size: 14px;
  height: 100%;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    filter: brightness(150%);
    color: #f0e6d2;
    transition-duration: 0.2s;
  }

  &.button-play-wrapper {
    transform: scale(0.8) translateY(-7px);
    margin-right: -26px;

    span {
      text-transform: uppercase;
      color: #f0e6d2;
      font-weight: 700;
      letter-spacing: 1px;
      position: absolute;
      left: 130px;
      top: 38px;
      cursor: pointer;
    }
  }

  img {
    &.play-button-shape {
      margin: 0 2.2rem;
      position: relative;
      top: 20px;
    }
  }

  &.navigation {
    display: flex;
    align-items: center;
    justify-content: center;

    &.disabled {
      a {
        cursor: not-allowed;
        filter: grayscale(100%);
      }
    }

    &.active,
    &:hover {
      cursor: pointer;
      background: linear-gradient(
        0deg,
        rgba(235, 235, 244, 0.1348914566),
        hsla(0, 0%, 100%, 0) 70%
      );

      transition-duration: 0.2s;
    }

    a {
      color: #beb088;
      text-transform: uppercase;
      font-weight: 700;
      background: transparent;
      letter-spacing: 1px;
      padding: 28.5px 1.5rem;
      display: block;
      transition-duration: 0.2s;
      filter: brightness(100);
      opacity: 0.4;

      &.active {
        color: #beb088;
        opacity: 1;
        filter: grayscale(0%);
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
