import styled from 'styled-components';

export const OverviewContainer = styled.div`
  height: calc(100% - 164px);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 0 70px;

  h1 {
    color: #f0e6d2;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    display: block;
  }
  p {
    margin-top: 2rem;
    color: #938f83;
  }
`;
