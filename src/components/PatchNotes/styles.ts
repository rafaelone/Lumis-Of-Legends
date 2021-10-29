import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 60px 50px 0 70px;

  strong {
    color: #f0e6d2;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 2rem;
    font-size: 30px;
  }

  span {
    font-family: Domine, sans-serif;

    font-size: 1.2rem;
    color: #f0e6d2;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 1rem;

    &.date {
      color: #938f83;
      margin: 1rem 0rem;
    }
  }

  p {
    font-family: Domine, sans-serif;

    font-size: 1.2rem;
    color: #f0e6d2;
    letter-spacing: 1px;
    display: block;
    margin-top: 16px;
  }

  ul {
    margin-top: 10px;
    list-style: none;
    li {
      font-family: Domine, sans-serif;

      font-size: 1.2rem;
      color: #f0e6d2;
      letter-spacing: 1px;
      display: block;

      & + li {
        margin-top: 8px;
      }
    }
  }
`;
