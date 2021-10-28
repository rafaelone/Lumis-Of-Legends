import styled, {css} from 'styled-components';

type navigationTypeProps = {
  isLast?: boolean;
};

export const NavigationType = styled.li<navigationTypeProps>`
  height: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 0px 16px;
    &.active {
      filter: brightness(0.9);
    }
  }

  img {
    width: 39px;
    padding: 24px 8px;
  }

  &.disabled a {
    cursor: no-drop;
    filter: grayscale(100%);
    opacity: 0.4;
  }

  ${({isLast}) =>
    isLast &&
    css`
      margin-right: 30px;
    `}
`;

export const PointsContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & + div {
      margin-top: 5px;
    }
    img {
      display: inline-block;
      margin-right: 6px;
      width: 16px;
    }

    span {
      font-size: 12px;
      color: #f0e6d2;
      letter-spacing: 2px;
      font-weight: 700;
      position: relative;

      text-align: left;
      margin-right: 3rem;
    }
  }

  &:before {
    position: absolute;
    width: 2px;
    height: 90%;
    content: '';

    background: linear-gradient(black, #cdb88c, black);

    left: -25px;
  }
`;
