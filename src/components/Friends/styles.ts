import styled from 'styled-components';

export const ContainerFriends = styled.div`
  height: calc(100vh - 80px);
  overflow: auto;
  span {
    color: #e4dbc8;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 14px;
    font-weight: 700;
    transition-duration: 0.2s;
    cursor: pointer;
  }
  ul {
    list-style: none;

    li {
      color: #e4dbc8;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 14px;
      font-weight: 700;
      padding-top: 9.6px;
      transition-duration: 0.2s;
      cursor: pointer;
      padding: 9.6px;

      &:hover {
        background-color: #192026;
        transition-duration: 0.2s;
      }

      div.circle {
        width: 14px;
        height: 14px;
        background-color: #000;
        border: 4px solid;
        border-radius: 300px;
        position: absolute;
        transform: translate(28px, -15px);
        border-color: #09a646;
      }
    }
  }
`;

export const General = styled.span`
  padding: 9.6px;
  width: 100%;
  display: block;
  &:hover {
    background-color: #192026;
    transition-duration: 0.2s;
  }
`;

export const FriendImage = styled.div`
  width: 42px;
  height: 42px;
  background: #6a5028;
  background: linear-gradient(0deg, #6a5028, #be9c57);
  border-radius: 300px;
  display: inline-block;
  margin-right: 12.8px;
  vertical-align: middle;
  position: relative;

  img {
    position: absolute;
    width: 38px;
    height: 38px;
    border-radius: 300px;
    left: 2px;
    top: 2px;
  }
`;

export const FriendInformation = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }
  display: inline-block;
  width: calc(100% - 56px);
  height: 42px;
  vertical-align: middle;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span.name {
    font-size: 17px;
    color: rgba(228, 219, 200, 0.5137254901960784);
    text-transform: none;
    letter-spacing: 0;
    font-weight: 500;
  }

  span.status {
    margin-top: 3px;
    color: #09a646;
    font-size: 13px;
    text-transform: none;
    letter-spacing: 0;
    font-weight: 400;
  }
`;
