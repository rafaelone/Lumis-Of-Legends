import styled, {css} from 'styled-components';

type StatusProps = {
  isOnline: boolean;
};

export const Container = styled.div`
  margin-top: 2px;
  color: #f0e6d2;
  position: relative;
  border-bottom: 1px solid #65656f;
  display: flex;
`;

export const IconPlayerContainer = styled.div`
  span {
    color: #a09b8c;
    font-size: 14px;
    position: absolute;
    left: 21px;
    top: 50px;
    z-index: 3;
  }
`;

export const BorderIconPlayer = styled.img`
  display: inline-block;
  cursor: pointer;
  transition-duration: 0.2s;
  position: relative;
  z-index: 2;
  width: 66px;
  height: 68px;
  &:hover {
    filter: brightness(125%);
    transition-duration: 0.2s;
  }
`;

export const IconPlayer = styled.img`
  position: absolute;
  left: 0;
  border-radius: 50%;
  z-index: 1;
  width: 66px;
  height: 64px;
  &:hover {
    filter: brightness(125%);
    transition-duration: 0.2s;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
  position: relative;
  span {
    font-size: 17px;
    letter-spacing: 1px;
  }
`;

export const Status = styled.div<StatusProps>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  button {
    position: relative;
    font-size: 14px;
    margin-left: 23px;
    margin-top: 4px;
    background: transparent;
    border: 0;
    color: #09a646;

    span {
      font-size: 14px;
    }

    ${({isOnline}) =>
      !isOnline &&
      css`
        color: #9c3213;
      `}

    &:before {
      position: absolute;
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border: 2px solid #66f8a0;
      background-color: #09a646;
      border-radius: 300px;
      vertical-align: middle;
      cursor: pointer;
      left: -24px;
      top: 0px;
      cursor: pointer;

      ${({isOnline}) =>
        !isOnline &&
        css`
          border-color: #9c3213;
          background-color: initial;
        `}
    }
  }
`;
