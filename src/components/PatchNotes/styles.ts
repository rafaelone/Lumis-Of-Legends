import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 0 70px;

  h1 {
    color: #f0e6d2;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 2rem;
  }

  p {
    font-family: Roboto, sans-serif;
    margin: 2rem;
    font-size: 1.2rem;
    color: #f0e6d2;
    letter-spacing: 1px;
    display: block;

    &.date {
      color: #938f83;
    }
  }
`;
