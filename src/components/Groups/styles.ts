import styled from 'styled-components';

export const ContainerGroups = styled.ul`
  list-style: none;
  li {
    padding: 12.8px 0 12.8px 9.6px;
    transition-duration: 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #192026;
      transition-duration: 0.2s;
    }

    span {
      padding-left: 6.4px;
      color: #e4dbc8;
      height: 46px;
      vertical-align: middle;
      font-size: 14px;
      font-family: ${({theme}) => theme.fonts.Roboto};
      &.abreviation {
        padding-left: 12.8px;
        color: #aa9261;
        font-size: 16px;
        height: 46px;
        vertical-align: middle;
      }
    }
  }
`;
